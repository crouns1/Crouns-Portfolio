import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold">Get In Touch</h2>
      <p className="mt-4 text-gray-600">
        Have a project in mind or just want to say hello? Send me a message.
      </p>

      {status === 'success' ? (
        <div className="mt-8 p-4 bg-green-50 text-green-700 rounded">
          Thank you for your message! I’ll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="px-6 py-3 bg-gray-900 text-white rounded-lg disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactSection;
