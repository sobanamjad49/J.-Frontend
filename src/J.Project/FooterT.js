import React from "react";
import { Accordion } from "react-bootstrap";
import { Form, Link } from "react-router-dom";

function FooterT() {
  return (
    <div>
       
      <div className="flex  bg-slate-200 p-3">
        <Link to="/Header2">
          {" "}
          <p className="font-light text-sm">HOME</p>
        </Link>
        <img
          className="w-4 h-4  ml-2 mt-[0.2rem] mr-2 "
          src="https://www.freeiconspng.com/thumbs/greater-than-sign-icon/greater-than-sign-icon-30.png"
        />
        <p className="font-medium text-sm uppercase">Terms & Conditions</p>
      </div>
      <div className="ml-5">
        <p className="uppercase font-semibold text-xl">Terms & Conditions</p>
        <p className="mt-5 font-medium ">TERMS</p>
        <p className="mt-3">
          By accessing the website at http://www.junaidjamshed.com/, you are
          agreeing to be bound by these terms of service, all applicable laws
          and regulations, and agree that you are responsible for compliance
          with any applicable local laws. If you do not agree with any of these
          terms, you are prohibited from using or accessing this site. The
          materials contained in this website are protected by applicable
          copyright and trademark law.
        </p>
        <p className="mt-3 font-medium uppercase">Use License</p>
        <p className="mt-3 text-sm font-medium">
          Permission is granted to temporarily download one copy of the
          materials (information or software) on Junaid Jamshed (Pvt.) Ltd's
          website for personal, non-commercial transitory viewing only. This is
          the grant of a license, not a transfer of title, and under this
          license, you may not: modify or copy the materials;
        </p>
        <p className="mt-3 text-sm font-medium">
          use the materials for any commercial purpose, or for any public
          display (commercial or non-commercial);
        </p>
        <p className="mt-3 text-sm font-medium">
          remove any copyright or other proprietary notations from the
          materials; or
        </p>
        <p className="mt-3 text-sm font-medium">
          transfer the materials to another person or "mirror" the materials on
          any other server.
        </p>

        <p className="mt-5 font-medium ">Disclaimer</p>
        <p className="mt-3 text-sm font-medium">
          he materials on Junaid Jamshed Pvt Ltd's website are provided on an
          'as is' basis. Junaid Jamshed Pvt Ltd makes no warranties, expressed
          or implied, and hereby disclaims and negates all other warranties
          including, without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights.
        </p>
        <p className="mt-3 text-sm font-medium">
          Further, Junaid Jamshed Pvt Ltd does not warrant or make any
          representations concerning the accuracy, likely results, or
          reliability of the use of the materials on its website or otherwise
          relating to such materials or on any sites linked to this site.
        </p>

        <p className="mt-3 font-medium uppercase">Limitations</p>
        <p className="mt-3 text-sm font-medium">
          In no event shall Junaid Jamshed Pvt Ltd be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to
          use the materials on Junaid Jamshed Pvt Ltd's website, even if Junaid
          Jamshed Pvt Ltd or a Junaid Jamshed Pvt Ltd authorized representative
          has been notified orally or in writing of the possibility of such
          damage. Because some jurisdictions do not allow limitations on implied
          warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </p>

        <p className="mt-3 font-medium uppercase">Delivery of your Order</p>
        <p className="mt-3 text-sm font-medium">
          J. products are sold on a delivery duty unpaid basis. The recipient
          may have to pay import duty or a formal customs entry fee prior to or
          on delivery. Additional taxes, fees or levies may apply according to
          local legislation and customers are required to check these details
          before placing an order for international delivery.
        </p>
        <p className="mt-3 text-sm font-medium">
          Where possible, we try to deliver in one go. We reserve the right to
          split the delivery of your order, for instance (but not limited to) if
          part of your order is delayed or unavailable. In the event that we
          split your order, we will notify you of our intention to do so by
          sending you an e-mail to the e-mail address provided by you at the
          time of purchase. You will not be charged for any additional delivery
          costs.
        </p>

        <p className="mt-3 font-medium uppercase">Links</p>
        <p className="mt-3 text-sm font-medium">
          We may have placed links on this Website to other websites which we
          think you may want to visit. We do not vet these websites and do not
          have any control over their contents. Except where required by
          applicable law, J. cannot accept any liability in respect of the use
          of these websites.
        </p>

        <p className="mt-3 font-medium uppercase">Complaints process</p>
        <p className="mt-3 text-sm font-medium">
          We hope that you're pleased with any purchase you've made or the
          service you've received from J. and that you'll never have reason to
          complain - but if there's something you're not happy with, we'd like
          to put matters right, so please contact us straight away:
        </p>

        <p className="mt-3 font-medium uppercase">BY EMAIL</p>
        <p className="mt-3 text-sm font-medium">eshop@junaidjamshed.com</p>

        <p className="mt-3 font-medium uppercase">BY TELEPHONE </p>
        <p className="mt-3 text-sm font-medium">
          021 111 112 111 (9am - 10pm , Monday - Saturday )
        </p>
      </div>
      
    </div>
  );
}

export default FooterT;
