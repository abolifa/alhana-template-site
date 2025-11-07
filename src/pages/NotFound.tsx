"use client";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-linear-to-b from-black via-zinc-900 to-black text-white text-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,75,0,0.15),transparent_70%)] pointer-events-none" />
      <h1 className="text-[8rem] md:text-[10rem] font-extrabold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-[#FF4B00] via-orange-400 to-yellow-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] select-none">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        {t("page_not_found") || "الصفحة غير موجودة"}
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-8">
        {t("page_not_found_desc") ||
          "يبدو أنك وصلت إلى طريق غير موجود. تأكد من الرابط أو عد إلى الصفحة الرئيسية."}
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-10 py-4 rounded-full font-semibold bg-[#FF4B00] hover:bg-[#e54400] transition transform hover:scale-105 shadow-lg"
      >
        {t("back_home") || "العودة إلى الرئيسية"}
      </button>
    </section>
  );
};

export default NotFound;
