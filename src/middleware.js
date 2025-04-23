import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside

export function middleware(request) {
const dummyUserData = {
    role:"user",
    email:"test@admin.com"
}
    let CurrentCookie = request.cookies.get('nextjs-cookies')
    console.log(CurrentCookie);

    let isServicesPage = request.nextUrl.pathname.startsWith("/services") 
    let isAdmin = dummyUserData.role == "admin"
    if(isServicesPage && !isAdmin)
        return NextResponse.redirect(new URL('/login', request.url))
 
  return NextResponse.next()

}
 

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     return NextResponse.next()
    
//   }
//    -----> mane bujhay holo client jokhon request pathay tokhon server nutral vabe check na korei server a data take pathay dei






// middleware() ফাংশনের কাজ কী?
// এই ফাংশনটি হচ্ছে Next.js-এর একটি Middleware ফাংশন, যেটা ব্রাউজার থেকে যখন কোনো পেজে রিকোয়েস্ট আসে, তখন সেটা আগে এই ফাংশনের ভিতর দিয়ে যায়।

// 💡 কোড বিশ্লেষণ:

// export function middleware(request) {
// ➡️ এই ফাংশনটি এক্সপোর্ট করা হচ্ছে, যাতে Next.js এটাকে middleware হিসেবে চিনে।


// const dummyUserData = {
//     role: "user",
//     email: "test@admin.com"
// }
// ➡️ এটা একটা ডামি ইউজার ডাটা — ধরে নিচ্ছে ইউজার একজন সাধারণ "user", অ্যাডমিন না।


// let CurrentCookie = request.cookies.get('nextjs-cookies')
// console.log(CurrentCookie);
// ➡️ ইউজারের কুকি থেকে 'nextjs-cookies' নামের কুকি রিড করা হচ্ছে। এটি ধরে নিচ্ছে ইউজারের লগইন অবস্থা বা সেশন এখানে থাকে।


// let isServicesPage = request.nextUrl.pathname.startsWith("/services") 
// ➡️ চেক করা হচ্ছে — ইউজার কি /services দিয়ে শুরু হওয়া কোনো পেজে যেতে চাচ্ছে কিনা।


// let isAdmin = dummyUserData.role == "admin"
// ➡️ চেক করছে ইউজার কি অ্যাডমিন কিনা। এখানে যেহেতু role: "user" দেওয়া, তাই isAdmin = false হবে।

// if (isServicesPage && !isAdmin)
//     return NextResponse.redirect(new URL('/login', request.url))
// ➡️ যদি ইউজার /services পেজে যেতে চায় এবং সে অ্যাডমিন না হয়, তাহলে তাকে /login পেজে রিডাইরেক্ট করে দেওয়া হবে।


// return NextResponse.next()
// ➡️ যদি কোনো রিডাইরেকশন না লাগে, তাহলে আগের মতোই রিকোয়েস্ট আগাবে — অর্থাৎ ইউজারকে তার কাঙ্ক্ষিত পেজেই যেতে দেওয়া হবে।

// ✅ সংক্ষেপে:

// বিষয়	মানে
// middleware	একটা চেকপয়েন্ট, যেখানে যাচাই করা হয় ইউজার কোথায় যাচ্ছে এবং কে সে
// /services পেজ	এই পেজ শুধুমাত্র অ্যাডমিনদের জন্য
// সাধারণ ইউজার	/services পেজে যেতে চাইলেই তাকে /login পেজে পাঠিয়ে দেওয়া হয়
// 🔐 ভবিষ্যতে কি করতে পারো?
// dummyUserData এর বদলে সঠিক ইউজার ডাটা (যেমন JWT বা Session Cookie) ব্যবহার করতে পারো।

// Middleware ব্যবহার করে রোল-বেজড রাউট প্রোটেকশন করা যায়।
