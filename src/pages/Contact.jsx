import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { PageHero } from "@/components/ui/page-hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { sendMessage, resetStatus } from "@/store/contactSlice";
import { profile } from "@/data/resume";
import { validateEmail, validatePhone, sanitizeDigits } from "@/lib/validators";
import { cn } from "@/lib/utils";

export default function Contact() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((s) => s.contact);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (status === "succeeded") {
      reset();
      const t = setTimeout(() => dispatch(resetStatus()), 6000);
      return () => clearTimeout(t);
    }
  }, [status, reset, dispatch]);

  const onSubmit = (data) => dispatch(sendMessage(data));

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something"
        description="Open to Senior React / Frontend roles and select freelance work. Fill the form — it lands straight in my inbox."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Card className="divide-y divide-border">
              <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
              <ContactRow icon={MapPin} label="Location" value={profile.location} />
            </Card>

            <Card className="flex items-center gap-4 p-5">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-ink-muted hover:text-primary transition-colors">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-ink-muted hover:text-primary transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <p className="text-sm text-ink-muted">Prefer socials? Find me here too.</p>
            </Card>
          </div>

          <Card className="p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name}>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    {...register("phone", { validate: validatePhone })}
                    onInput={(e) => {
                      e.target.value = sanitizeDigits(e.target.value);
                    }}
                    placeholder="10-digit mobile number"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Email" error={errors.email}>
                <input
                  type="email"
                  {...register("email", { validate: validateEmail })}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </Field>

              <Field label="Subject" error={errors.subject}>
                <input
                  {...register("subject")}
                  placeholder="e.g. Senior React Engineer opening"
                  className={inputClass}
                />
              </Field>

              <Field label="Message" error={errors.message}>
                <textarea
                  rows={6}
                  {...register("message", { required: "Message can't be empty" })}
                  placeholder="Tell me about the role or project..."
                  className={cn(inputClass, "resize-none")}
                />
              </Field>

              <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
                <Send className="h-4 w-4" />
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {status === "succeeded" && (
                <p className="flex items-center gap-2 text-sm font-medium text-accent">
                  <CheckCircle2 className="h-4 w-4" /> Message sent — thanks for reaching out, I'll reply soon.
                </p>
              )}
              {status === "failed" && (
                <p className="flex items-center gap-2 text-sm font-medium text-danger">
                  <AlertCircle className="h-4 w-4" /> {error || "Couldn't send. Try emailing directly."}
                </p>
              )}
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-primary";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-muted">
        {label}
        {error && <span className="text-danger"> — {error.message}</span>}
      </span>
      {children}
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium text-ink-faint">{label}</p>
        <p className="truncate text-sm font-medium text-ink">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:bg-surface-2/60 transition-colors">
      {content}
    </a>
  ) : (
    content
  );
}