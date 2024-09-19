"use client";
import React from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { PiMetaLogo, PiShoppingCartSimpleFill } from "react-icons/pi";

import ButtonCart from "../buttons/buttonCart";
import colors from "@/shared/themes/colors";

const NavBar = () => {
  return (
    <nav
      className="flex justify-between items-center py-2 px-4 sm:px-6 lg:px-12 h-16 border-b"
      style={{ borderColor: colors.gray }}
    >
      <div
        className="flex items-center gap-2 flex-grow sm:flex-grow-0 sm:w-auto"
        style={{ color: colors.blueDark }}
      >
        <PiMetaLogo
          className="text-2xl sm:text-3xl"
          style={{ color: colors.primary }}
        />
        <span className="hidden sm:block" style={{ color: colors.secondary }}>
          SuaLogo
        </span>
      </div>
      <div className="flex flex-row justify-end items-center gap-2 sm:gap-4 flex-grow sm:w-auto">
        <span className="hidden md:block" style={{ color: colors.dark }}>
          Cotação dólar hoje: R$5,53
        </span>
        <ButtonCart
          text=""
          icon={IoIosHelpCircleOutline}
          size="28px"
          filter={false}
          backgroundColor="transparent"
          color={colors.primary}
        />
        <div
          className="hidden sm:block border-l h-6"
          style={{ borderColor: colors.gray }}
        ></div>
        <ButtonCart
          text="Entrar"
          icon={FaRegUser}
          size="medium"
          filter={false}
          backgroundColor="transparent"
          color={colors.primary}
        />
      </div>
    </nav>
  );
};

export default NavBar;
