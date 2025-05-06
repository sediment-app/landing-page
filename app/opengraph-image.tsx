/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "Sediment - The Budgeting Card";
export const contentType = "image/png";

export default async function OG() {
  const sfPro = await fetch(
    new URL("./fonts/SF-Pro-Display-Medium.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom right, #fcbbbb 10%, #ffffff 50%, #CFFAFE 85%)",
        }}
      >
        <img
          src={new URL("../public/logo.png", import.meta.url).toString()}
          alt="Sediment Logo"
          tw="w-32 h-32 mb-4 opacity-95"
        />
        <h1
          style={{
            fontSize: "90px",
            fontFamily: "SF Pro",
            background:
              "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          Sediment
        </h1>
        <h2
          style={{
            fontSize: "40px",
            fontFamily: "SF Pro",
            background:
              "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          The Bank Account That Manages Your Money for You
        </h2>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "SF Pro",
          data: sfPro,
        },
      ],
    },
  );
}
