"use server";

export async function createSubscriber(formData: FormData) {
  console.log({ formData: formData.get("email") });
}

