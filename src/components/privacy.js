import React from 'react'
import { Link } from 'react-router-dom';

export const Privacy = () => {
  return (
    <div className="info-page">
        <h1>ITea's Privacy Policy</h1>
      <p>
        This Privacy Policy describes how your personal information is
        collected, used, and shared when you visit or make a purchase from ITea.
      </p>
      <strong>What Personal Information We Collect</strong>
      <p>
        When you visit the Site, we automatically collect certain information
        about your device, including information about your web browser, IP
        address, time zone, and some of the cookies that are installed on your
        device.
      </p>
      <p>
        Additionally, as you browse the Site, we collect information about the
        individual web pages or products that you view, what websites or search
        terms referred you to the Site, and information about how you interact
        with the Site. We refer to this automatically collected information as
        Device Information.
      </p>
      <p>We collect Device Information using the following technologies:</p>
      <ul>
        <li>
          <strong>Cookies</strong> are data files that are placed on your device
          or computer and often include an anonymous unique identifier.
        </li>
        <li>
          <strong>Log files</strong> track actions occurring on the Site, and
          collect data including your IP address, browser type, Internet service
          provider, referring/exit pages, and date/time stamps.
        </li>
      </ul>
      <p>
        Also, when you make a purchase or attempt to make a purchase through the
        Site, we collect certain information from you, including your name,
        billing address, shipping address, payment information (including credit
        card numbers Mention all types of accepted payments, email address, and
        phone number. This is called <strong>Order Information</strong>.
      </p>
      <p>
        By <strong>Personal Information</strong> in this Privacy Policy, we are
        talking both about Device Information and Order Information.
      </p>
      <strong>How do we use personal information</strong>
      <p>
        We use the Order Information that we collect generally to fulfil any
        orders placed through the Site (including processing your payment
        information, arranging for shipping, and providing you with invoices
        and/or order confirmations).
      </p>
      <p>Additionally, we use this Order Information to:</p>
      <ul>
        <li>Communicate with you.</li>
        <li>Screen our orders for potential risk or fraud.</li>
        <li>
          When in line with the preferences you have shared with us, provide you
          with information or advertising relating to our products or services.
        </li>
      </ul>
      <p>
        We use the Device Information that we collect to help us screen for
        potential risk and fraud (in particular, your IP address), and more
        generally to improve and optimize our Site.
      </p>
      <p>
        <strong>Sharing Your Personal Information</strong>
      </p>
      <p>
        We share your Personal Information with third parties to help us use
        your Personal Information, as described above.
      </p>
      <p>
        We also use Google Analytics to help us understand how our customers use
        ITea.
        <a
          href="https://www.google.com/intl/en/policies/privacy/"
          rel="nofollow"
          >How Google uses your Personal Information</a
        >
        .
      </p>
      <p>
        Finally, we may also share your Personal Information to comply with
        applicable laws and regulations, to respond to a subpoena, search
        warrant or other lawful requests for information we receive, or to
        otherwise protect our rights.
      </p>
      <p>
        <strong>Behavioural Advertising</strong>
      </p>
      <p>
        We use your Personal Information to provide you with targeted
        advertisements or marketing communications we believe may be of interest
        to you.
      </p>
      <p>
        <strong>Your Rights</strong>
      </p>
      <p>
        If you are a European resident, you have the right to access the
        personal information we hold about you and to ask that your personal
        information is corrected, updated, or deleted. If you would like to
        exercise this right, please contact us.
      </p>
      <p>
        Additionally, if you are a European resident we note that we are
        processing your information in order to fulfil contracts we might have
        with you (for example if you make an order through the Site), or
        otherwise to pursue our legitimate business interests listed above.
        <br />
        Please note that your information will be transferred outside of Europe,
        including to Canada and the United States.
      </p>
      <p>
        <strong>Data Retention</strong>
      </p>
      <p>
        When you place an order through the Site, we will maintain your Order
        Information for our records unless and until you ask us to delete this
        information.
      </p>
      <p>
        <strong>Minors</strong>
      </p>
      <p>The Site is not intended for individuals under the age of 18.</p>
      <p>
        <strong>Changes</strong>
      </p>
      <p>
        We may update this privacy policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal or
        regulatory reasons.
      </p>
      <p>
        If you have questions and/or require more information, do not hesitate
        to <Link to="/contact">contact us</Link>.
      </p>
    </div>
  )
}

export default Privacy;
