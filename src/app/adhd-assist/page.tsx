import Link from "next/link"
import { ProfileSection } from "@/components/profile-section"
import { aboutMe } from "@/data/aboutme"

export default function AdhdAssistPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          
          {/* Left column */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />

              <Link
                href="/"
                className="text-sm font-serif underline text-zinc-700 hover:text-zinc-900"
              >
                ← Back to home
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-16">
            
            <section className="space-y-4">
              <h1 className="font-serif text-2xl tracking-wide">
                ADHD-Assist: AR Housework Assistant for Executive Dysfunction
              </h1>

              <p className="font-serif text-sm text-zinc-700 leading-relaxed">
                A mixed reality system designed to support individuals with ADHD by providing context-aware task prompts during household chores.
              </p>
            </section>

            {/* Video */}
            <section className="space-y-4">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-sm"
                  src="https://youtu.be/qrlrOmUBG5g"
                  title="Project presentation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>

            {/* Description */}
            <section className="space-y-6">
              <p className="font-serif text-sm text-zinc-700 leading-relaxed">
                This project is an augmented reality housework assistant designed to support people with ADHD and other forms of executive dysfunction. The goal is to make everyday chores feel less overwhelming by providing gentle structure and guidance directly in the user’s environment.
              </p>

              <p className="font-serif text-sm text-zinc-700 leading-relaxed">
                I chose this topic because many people with ADHD struggle with getting started on tasks or keeping track of what they’re doing, especially in cluttered spaces. Instead of adding more reminders or notifications, I wanted to create something that feels supportive and stays out of the way.
              </p>

              <p className="font-serif text-sm text-zinc-700 leading-relaxed">
                The application frames chores as a kind of in-world quest system. Tasks appear as floating AR prompts that exist where the work actually happens, reducing the need to constantly check a phone or remember the next step. This keeps attention anchored to the space itself rather than a separate screen.
              </p>

              <p className="font-serif text-sm text-zinc-700 leading-relaxed">
                The project was built for Snap Spectacles, chosen for their lightweight design and suitability for hands-free AR during real household activities. Wearing them feels natural and allows the interface to blend into the task instead of interrupting it.
              </p>

              <p className="font-serif text-sm text-zinc-700 leading-relaxed">
                Over the course of development, the system evolved significantly. Early versions required users to manually define chore zones and label tasks. This was later replaced with a vision-based approach where the user simply captures an image of their space, and the system automatically generates a relevant task list. Building this pipeline helped me learn a lot about mixed reality interaction design, spatial UI, and connecting AR experiences with AI-driven systems. I also focused heavily on keeping the interface calm, clear, and non-overstimulating.
              </p>

              <p className="font-serif text-sm text-zinc-700 leading-relaxed">
                The final prototype demonstrates AR task menus inside the environment and an automated process that transforms a room snapshot into actionable steps. At its core, the project aims to make housework feel less like an insurmountable barrier and more like a guided, manageable experience.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
