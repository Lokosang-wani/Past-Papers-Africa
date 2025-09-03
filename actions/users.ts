"use server";

import supabase from "@/config/supabase-config";
import { currentUser } from "@clerk/nextjs/server";

export const saveClerkUserToSupabase = async (clerkUser: any) => {
  try {
    const supabaseUserObj = {
      name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
      email: clerkUser.emailAddresses?.[0]?.emailAddress || "",
      clerk_user_id: clerkUser.id,
      profile_pic: clerkUser.imageUrl || "",
      default_time: 60,
    };

    const { data, error } = await supabase
      .from("users")
      .insert([supabaseUserObj])
      .select("*");

    if (error) throw new Error(error.message);

    return {
      success: true,
      data: data?.[0] || null, // return single row
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getCurrentUserFromSupabase = async () => {
  try {
    const clerkUser = await currentUser();
    if (!clerkUser) {
      throw new Error("No Clerk user found");
    }

    // Try to fetch existing Supabase user
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("clerk_user_id", clerkUser.id)
      .maybeSingle();

    if (error) throw new Error(error.message);

    if (data) {
      // Found existing user
      return { success: true, data };
    }

    // If not found, create new one
    const newUserResponse = await saveClerkUserToSupabase(clerkUser);
    if (!newUserResponse.success) {
      throw new Error(newUserResponse.message);
    }

    return {
      success: true,
      data: newUserResponse.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
