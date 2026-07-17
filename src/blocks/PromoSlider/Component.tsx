'use client'

import type { Media } from '@/payload-types'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Banner = {
  image: Media | string
  link: string
  id?: string | null
}

type Props = {
  banners?: Banner[] | null
}

const SliderNavigation = () => {
  const swiper = useSwiper()

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-primary shadow-[0_4px_15px_rgba(0,0,0,0.15)] backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-primary shadow-[0_4px_15px_rgba(0,0,0,0.15)] backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </>
  )
}

export const PromoSliderBlock: React.FC<Props> = ({ banners }) => {
  if (!banners || banners.length === 0) return null

  return (
    <section className="w-full py-8 overflow-hidden bg-background">
      <div className="container mx-auto px-2 md:px-6 relative promo-swiper-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.1}
          centeredSlides={false}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={banners.length > 2} // Only loop if we have enough banners
          breakpoints={{
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.15,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 2.25,
              spaceBetween: 32,
            },
          }}
          className="w-full pb-12"
        >
          {banners.map((banner, index) => {
            const imageUrl =
              typeof banner.image === 'object' && banner.image?.url
                ? banner.image.url
                : banner.image

            return (
              <SwiperSlide key={banner.id || index}>
                <Link
                  href={banner.link || '#'}
                  className="block overflow-hidden rounded-2xl shadow-sm transition-transform hover:shadow-md active:scale-[0.98]"
                >
                  <div className="relative h-auto max-h-[250px] sm:max-h-[350px] md:max-h-[420px] w-full bg-muted flex items-center justify-center">
                    {imageUrl && (
                      <img
                        src={imageUrl as string}
                        alt={`Promo banner ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}

          <SliderNavigation />
        </Swiper>
      </div>
    </section>
  )
}
