import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      xPercent: 0,
      duration: 2,
      borderTopLeftRadius: "0vh",
      borderBottomLeftRadius: "0vh",
      borderTopRightRadius: "0vh",
      borderBottomRightRadius: "0vh",
    })
      .to(transitionElement, {
        xPercent: 100,
        duration: 1,
        ease: "power2.out",
      })
      .to(
        transitionElement,
        {
          borderTopLeftRadius: "0%",
          borderBottomLeftRadius: "0vh",
          borderTopRightRadius: "0vh",
          borderBottomRightRadius: "0vh",
          duration: 2,
        },
        "<"
      );
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      xPercent: -100,
      duration: 2,

      borderTopRightRadius: "0vh",
      borderBottomRightRadius: "0vh",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    })
      .to(animationWrapper, {
        xPercent: 0,
        duration: 1,
        onComplete: () => {
          router.push(href);
        },
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          borderTopLeftRadius: "0vh",
          borderBottomLeftRadius: "0vh",
          duration: 2,
        },
        "<"
      );
  }
};
