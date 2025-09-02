"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Handshake, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Servicios", href: "/services" },
    { name: "Proyectos", href: "/projects" },
    { name: "Proceso", href: "/process" },
    { name: "Soporte", href: "/support" },
    { name: "Alianzas", href: "/partnership", icon: React.createElement(Handshake, { className: "w-4 h-4" }) },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return React.createElement(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md border-b border-gray-800/50" : "bg-black/30 backdrop-blur-sm"
      }`
    },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      React.createElement(
        "div",
        { className: "flex items-center justify-between h-16" },
        React.createElement(
          Link,
          { href: "/", className: "flex items-center space-x-2", onClick: scrollToTop },
          React.createElement(Image, {
            src: "/images/hasugue-logo.svg",
            alt: "Hasugue",
            width: 200,
            height: 50,
            className: "h-12 w-auto hasugue-logo"
          })
        ),
        React.createElement(
          "div",
          { className: "hidden lg:flex items-center space-x-4" },
          React.createElement(LanguageSelector, null),
          React.createElement(
            Link,
            { href: "/consultation", onClick: scrollToTop },
            React.createElement(
              Button,
              { className: "bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-medium" },
              React.createElement(Zap, { className: "w-4 h-4 mr-2" }),
              "Demo Gratuita"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "lg:hidden flex items-center space-x-3" },
          React.createElement(
            Link,
            { href: "/consultation", onClick: scrollToTop },
            React.createElement(
              Button,
              {
                size: "sm",
                className: "bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-medium text-xs px-3 py-2"
              },
              React.createElement(Zap, { className: "w-3 h-3 mr-1" }),
              "Demo"
            )
          ),
          React.createElement(
            "button",
            { onClick: () => setIsOpen(!isOpen), className: "text-gray-300 hover:text-white" },
            isOpen ? React.createElement(X, { className: "w-6 h-6" }) : React.createElement(Menu, { className: "w-6 h-6" })
          )
        )
      ),
      isOpen && React.createElement(
        "div",
        {
          className: `lg:hidden absolute top-full left-0 right-0 backdrop-blur-md border-b border-gray-800 ${
            scrolled ? "bg-black/70" : "bg-black/30"
          }`
        },
        React.createElement(
          "div",
          { className: "px-4 py-6 space-y-4" },
          React.createElement(
            "div",
            { className: "pt-4 border-t border-gray-700" },
            React.createElement(
              Link,
              {
                href: "/consultation",
                onClick: () => {
                  setIsOpen(false)
                  scrollToTop()
                }
              },
              React.createElement(
                Button,
                { className: "w-full bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-medium" },
                React.createElement(Zap, { className: "w-4 h-4 mr-2" }),
                "Demo Gratuita"
              )
            )
          )
        )
      )
    )
  )
}