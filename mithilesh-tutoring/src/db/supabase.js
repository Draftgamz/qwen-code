// src/db/supabase.js
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase configuration missing. Please set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY environment variables.');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// User management functions
const registerUser = async (email, password, userData) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });

    if (error) throw error;

    // Add additional user data to the users table
    if (data.user) {
      const { error: profileError } = await supabase
        .from('users')
        .upsert({
          id: data.user.id,
          email: data.user.email,
          ...userData,
          created_at: new Date().toISOString()
        }, { onConflict: 'id' });

      if (profileError) throw profileError;
    }

    return data.user;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;

    return data.user;
  } catch (error) {
    throw error;
  }
};

const logoutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

const getCurrentUser = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    throw error;
  }
};

// Session booking functions
const bookSession = async (sessionData) => {
  try {
    const { data, error } = await supabase
      .from('sessions')
      .insert([{
        ...sessionData,
        created_at: new Date().toISOString(),
        status: 'scheduled'
      }]);

    if (error) throw error;

    return data[0]?.id;
  } catch (error) {
    throw error;
  }
};

const getUserSessions = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('sessions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data;
  } catch (error) {
    throw error;
  }
};

// Student data functions
const addStudentData = async (userId, data) => {
  try {
    const { data: result, error } = await supabase
      .from('students')
      .insert([{
        user_id: userId,
        ...data,
        created_at: new Date().toISOString()
      }]);

    if (error) throw error;

    return result[0]?.id;
  } catch (error) {
    throw error;
  }
};

const updateStudentData = async (studentId, data) => {
  try {
    const { error } = await supabase
      .from('students')
      .update({
        ...data,
        updated_at: new Date().toISOString()
      })
      .eq('id', studentId);

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

const getStudentData = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('students')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    if (error.code === 'PGRST116') {
      // Record not found, return null
      return null;
    }
    throw error;
  }
};

// Learning path functions
const saveLearningPath = async (userId, pathData) => {
  try {
    const { data, error } = await supabase
      .from('learning_paths')
      .insert([{
        user_id: userId,
        ...pathData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }]);

    if (error) throw error;

    return data[0]?.id;
  } catch (error) {
    throw error;
  }
};

const getLearningPath = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('learning_paths')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) throw error;

    return data;
  } catch (error) {
    if (error.code === 'PGRST116') {
      // Record not found, return null
      return null;
    }
    throw error;
  }
};

// Testimonials functions
const addTestimonial = async (testimonialData) => {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .insert([{
        ...testimonialData,
        approved: false, // Need admin approval
        created_at: new Date().toISOString()
      }]);

    if (error) throw error;

    return data[0]?.id;
  } catch (error) {
    throw error;
  }
};

const getApprovedTestimonials = async () => {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data;
  } catch (error) {
    throw error;
  }
};

// Payment functions
const savePayment = async (paymentData) => {
  try {
    const { data, error } = await supabase
      .from('payments')
      .insert([{
        ...paymentData,
        created_at: new Date().toISOString(),
        status: 'pending'
      }]);

    if (error) throw error;

    return data[0]?.id;
  } catch (error) {
    throw error;
  }
};

const updatePaymentStatus = async (paymentId, status) => {
  try {
    const { error } = await supabase
      .from('payments')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', paymentId);

    if (error) throw error;
  } catch (error) {
    throw error;
  }
};

// Export all functions
export {
  supabase,
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  bookSession,
  getUserSessions,
  addStudentData,
  updateStudentData,
  getStudentData,
  saveLearningPath,
  getLearningPath,
  addTestimonial,
  getApprovedTestimonials,
  savePayment,
  updatePaymentStatus
};