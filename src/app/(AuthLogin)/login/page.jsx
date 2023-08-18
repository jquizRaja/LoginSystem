'use client'
import Layout from "@/app/layout/page";
import Link from "next/link";
import React from "react";
import styles from "@/styles/form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      <section className="w-3/4 mx-auto flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold PY-4">Explore</h1>
          <p className="w-3/4 mx-auto text-grey-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-5">
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
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password@"
              className={styles.input_text}
            />
            <span
              onClick={() => setShow(!show)}
              className="flex items-center px-4"
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* LOGIN BUTTON */}
          <div className="input.button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input.button">
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
          </div>
        </form>
        <p className="text-center text-gray-400">
          Don't have Account
          <span>
            <Link className="text-green-500 underline" href={"/register"}>
              <b>
                <i> Register</i>{" "}
              </b>
            </Link>
          </span>
        </p>
        {/* bottom */}
      </section>
    </Layout>
  );
}
