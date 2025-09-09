"use client";

import {
  Heading,
  Text,
  Column,
} from "@once-ui-system/core";
import Image from "next/image";

export default function Home() {
  return (
    <Column 
      fillWidth 
      center 
      padding="l" 
      style={{ 
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.25) 0%, transparent 60%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.25) 0%, transparent 60%),
          radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.25) 0%, transparent 60%),
          radial-gradient(circle at 60% 60%, rgba(255, 200, 120, 0.2) 0%, transparent 50%),
          linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)
        `,
        backgroundSize: "300% 300%",
        animation: "backgroundShift 12s ease-in-out infinite",
        position: "relative"
      }}
    >
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Image
          src="/nano-logo.png"
          alt="NANO Studio"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto", marginTop: "24px" }}
        />
        <Text
          variant="heading-default-xl"
          onBackground="neutral-strong"
          wrap="balance"
          marginBottom="16"
        >
          Premium AI Video Production for Global Brands • Advanced Neural Rendering Technologies
        </Text>
        <Text
          variant="body-default-l"
          onBackground="neutral-strong"
          wrap="balance"
          align="center"
          marginBottom="16"
        >
          NANO Studio delivers custom AI model training, advanced neural rendering 
          technologies, and production-grade video synthesis for global brands. We bring 
          your creative vision to life with cutting-edge AI technologies.
        </Text>
        <Text
          variant="body-default-s"
          onBackground="neutral-strong"
          wrap="balance"
          align="center"
          marginBottom="16"
        >
          Brand-Specific AI Models • Multi-Modal Video Synthesis • Industrial Render Pipeline • 
          Real-Time AI Processing • Custom Prompt Engineering • Professional Video Post-Production
        </Text>
      </Column>
      
      {/* Footer */}
      <Text
        variant="body-default-s"
        onBackground="neutral-strong"
        align="center"
        style={{ marginTop: "auto", paddingTop: "2rem" }}
      >
        info@nanostudio.us
      </Text>
    </Column>
  );
}
