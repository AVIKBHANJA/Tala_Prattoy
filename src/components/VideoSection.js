"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">
              Immersive Art Experience
            </h3>
            <p className="text-gray-300 mb-6">
              Tala Prattoy creates immersive art experiences that capture the
              essence of Durga Puja, transforming cultural heritage into modern
              artistic expressions. Experience the blend of tradition and
              innovation in our captivating installations.
            </p>
            <p className="text-gray-300 mb-6">
              Each artwork tells a story, connecting viewers to the rich
              traditions while presenting them in innovative and
              thought-provoking ways that challenge perception.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              {!isPlaying ? (
                <>
                  <Image
                    src="/video-thumb.jpg"
                    alt="Video Thumbnail"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button
                      onClick={toggleVideo}
                      className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-black ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls
                  autoPlay
                  onEnded={() => setIsPlaying(false)}
                >
                  {/* Replace with your actual video file */}
                  <source
                    src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
