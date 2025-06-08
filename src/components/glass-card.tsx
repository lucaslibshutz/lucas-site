"use client";

import React from "react";
import cx from "classnames";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GlassCard({
  children,
  className,
  ...rest
}: GlassCardProps) {
  return (
    <div
      className={cx(`backdrop-glass p-6 rounded-xl shadow-md`, className)}
      {...rest}
    >
      {children}
    </div>
  );
}
