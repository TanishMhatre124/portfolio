import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  // No backend is wired up in this sandbox build — submitting opens the visitor's
  // email client with the message pre-filled. Swap this for a real API call
  // (e.g. Formspree, Resend, or your own endpoint) once you have one.
  const onSubmit = (data: ContactForm) => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <section id="contact" className="border-t border-line py-24 sm:py-32">
      <div className="container max-w-content">
        <SectionHeading
          index="09"
          eyebrow="Contact"
          title="Let's work together"
          description="Have a role, project, or problem worth solving with data? I usually reply within a day."
        />

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <Card className="flex items-start gap-4 p-5">
              <Mail size={18} className="mt-0.5 shrink-0 text-signal" />
              <div>
                <p className="text-xs uppercase tracking-wider text-fog">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-sm text-paper hover:text-signal">
                  {personalInfo.email}
                </a>
              </div>
            </Card>
            <Card className="flex items-start gap-4 p-5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-signal" />
              <div>
                <p className="text-xs uppercase tracking-wider text-fog">Location</p>
                <p className="text-sm text-paper">{personalInfo.location}</p>
              </div>
            </Card>
            <Card className="flex items-start gap-4 p-5">
              <Clock size={18} className="mt-0.5 shrink-0 text-signal" />
              <div>
                <p className="text-xs uppercase tracking-wider text-fog">Response time</p>
                <p className="text-sm text-paper">{personalInfo.responseTime}</p>
              </div>
            </Card>
          </div>

          <Card className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider text-fog">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="w-full rounded border border-line bg-ink px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1.5 text-xs text-signal">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-fog">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full rounded border border-line bg-ink px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-signal">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider text-fog">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full resize-none rounded border border-line bg-ink px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-signal"
                  placeholder="What are you working on?"
                />
                {errors.message && <p className="mt-1.5 text-xs text-signal">{errors.message.message}</p>}
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Send message <Send size={15} />
              </Button>
              {isSubmitSuccessful && (
                <p className="text-xs text-fog">Your email client should have opened with the message ready to send.</p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
