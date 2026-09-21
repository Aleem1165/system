"use client";

import { useEffect, useState, useRef } from "react";

export default function FloatingScrollbar() {
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dragStartYRef = useRef(0);
  const dragStartScrollTopRef = useRef(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollHeight <= clientHeight + 10) {
        setThumbHeight(0);
        return;
      }

      // Proportional thumb height (min 45px, max 70% of screen)
      const ratio = clientHeight / scrollHeight;
      const height = Math.max(45, Math.min(clientHeight * 0.7, clientHeight * ratio));
      setThumbHeight(height);

      // Proportional position with 4px margin top & bottom
      const maxScrollTop = scrollHeight - clientHeight;
      const maxThumbTop = clientHeight - height - 8;
      const top = 4 + (scrollTop / maxScrollTop) * maxThumbTop;
      setThumbTop(top);

      setIsVisible(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    updateScroll();

    const observer = new ResizeObserver(updateScroll);
    if (document.body) observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      observer.disconnect();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    dragStartYRef.current = e.clientY;
    dragStartScrollTopRef.current = window.scrollY || document.documentElement.scrollTop;
    document.body.style.userSelect = "none";

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = moveEvent.clientY - dragStartYRef.current;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const maxScrollTop = scrollHeight - clientHeight;
      const maxThumbTop = clientHeight - thumbHeight - 8;

      if (maxThumbTop > 0) {
        const scrollDelta = (deltaY / maxThumbTop) * maxScrollTop;
        window.scrollTo({
          top: dragStartScrollTopRef.current + scrollDelta,
          behavior: "instant",
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = "";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  if (thumbHeight === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed right-0 top-0 bottom-0 z-[99999] pointer-events-none w-3 transition-opacity duration-300 select-none"
      style={{
        opacity: isVisible || isHovered || isDragging ? 1 : 0.4,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        onMouseDown={handleMouseDown}
        className="pointer-events-auto w-[6px] bg-[#7c35ed] hover:bg-[#6d28d9] active:bg-[#5b21b6] rounded-full shadow-[0_1px_4px_rgba(124,53,237,0.45)] cursor-pointer transition-[width,background-color] hover:w-[8px]"
        style={{
          position: "absolute",
          top: `${thumbTop}px`,
          height: `${thumbHeight}px`,
          right: "2px",
        }}
      />
    </div>
  );
}
