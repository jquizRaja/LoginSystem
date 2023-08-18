"use client";
import React from "react";
import Layout from "@/app/layout/page";
import styles from "@/styles/form.module.css";
import Link from "next/link";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint, HiUser } from "react-icons/hi";
import { useState } from "react";

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  return (
    <Layout>
      <section className="w-3/4 mx-auto flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold PY-4">Register</h1>
          <p>Register Here</p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="text"
              name="Username"
              placeholder="John doe"
              className={styles.input_text}
            />
            <span className="flex items-center px-4 ">
              <HiUser size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email@"
              className={styles.input_text}
            />
            <span className="flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password@"
              className={styles.input_text}
            />
            <span
              onClick={() => setShow({ ...show, password: !show.password })}
              className="flex items-center px-4"
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              placeholder="Confirm-Password@"
              className={styles.input_text}
            />
            <span
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              className="flex items-center px-4 "
            >
              <HiFingerPrint size={25}/>
            </span>
          </div>
          {/* LOGIN BUTTON */}
          <div className="input.button">
            <button type="submit" className={styles.button}>
              Register
            </button>
          </div>
          {/* <div className="input.button">
            <button type="button" className={styles.button}>
              <Image
                className="ml-24"
                src={"/assets/google.svg"}
                width={25}
                height={25}
                alt="imgGoo"
              />
            </button>
          </div>
          <div className="input.button">
            <button type="button" className={styles.button}>
              <Image
                className="ml-24"
                src={"/assets/github.png"}
                width={25}
                height={25}
                alt="imgGit"
              />
            </button>
          </div> */}
        </form>
        <p className="text-center text-black">
          Already having An Account
          <span>
            <Link className="text-black underline" href={"/login"}>
              <b>
                <i> Login</i>{" "}
              </b>
            </Link>
          </span>
        </p>
        {/* bottom */}
      </section>
    </Layout>
  );
}
