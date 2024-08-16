export default function ContactSection() {
    return (
      <section id="contact" className="container py-12 md:py-24 lg:py-32">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
            Get in Touch with Nexus Software
          </h2>
          <p className="text-lg text-primary-foreground md:text-xl">
            We'd love to hear from you! Whether you have a question, a project in mind, or just want to say hello, feel free to reach out to us.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <Feature icon={<PhoneIcon />} title="Phone" description="+1 (555) 123-4567" />
          <Feature icon={<MailIcon />} title="Email" description="info@nexussoftware.com" />
          <Feature icon={<MapPinIcon />} title="Address" description="123 Main Street, Anytown, USA" />
        </div>
      </section>
    );
  }
  
  function Feature({ icon, title, description }) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-full bg-primary p-2 text-primary-foreground">{icon}</div>
        <h4 className="text-lg font-semibold text-primary-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );
  }
  