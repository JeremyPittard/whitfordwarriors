import React from "react";
import Colours from "../../utils/colours";

const InsurancePage = () => {
  return (
    <>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundColor: Colours.blue,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            backgroundColor: Colours.blue,
            color: "white",
            padding: "1rem",
          }}
        >
          Player Insurance Information
        </h1>
      </div>
      <div className="container mb-2">
        <h2 className="title blue-text">Objective:</h2>
        <p className="mb-2">
          The purpose of this document is to supply players with critical
          information on the process, entitlements and expectations in relation
          to submitting a sports injury claim through the club's insurance
          arrangement.
        </p>
        <h2 className="title blue-text margin-top-3">The Process:</h2>
        <p>
          To begin the process, you will need to visit the below website and
          'Make a Claim'.
        </p>
        <p>
          <a href="https://sport.marshadvantage.com.au/afl/players">
            https://sport.marshadvantage.com.au/afl/players
          </a>
        </p>
        <p className="mb-2">
          You have the option of downloading the Personal Injury Claim form
          manually or submitting the Claim Online, select your preference and
          continue to complete the form.
        </p>
        <h3 class="blue-text mb-1">
          <strong>
            Information you should have handy when completing the form:
          </strong>
        </h3>
        <ul className="a-left mb-2 show-dots">
          <li>Bank account details for payments (if you wish to include) </li>
          <li>Private Health Insurance Information (if applicable) </li>
          <li>Contact information for your Club/Centre</li>
          <li>Expected time frames for returning to playing or training </li>
          <li>Times and Dates of the incident that occurred</li>
        </ul>
        <p>
          Note: You will not be able to save our claim lodgement and return at a
          later date.
        </p>
        <p>
          Once complete, the form will need to be submitted to Echelon Australia
          (Marsh Insurance use Echelon for these sports injury claims)
          <br />
          Email:
          <a href="mailto:sportsclaims@echelonaustralia.com.au">
            sportsclaims@echelonaustralia.com.au
          </a>
        </p>
        <p className="mb-2">
          Once submitted, you will receive an email from
          <a href="mailto:sportsclaims@echelonaustralia.com.au">
            sportsclaims@echelonaustralia.com.au that will provide you with an
            Online Reference Number and will have attached 3 documents:
          </a>
        </p>
        <ul className="a-left show-dots">
          <li>
            Claim Form (this is a summary of the information you have completed
            in your claim lodgement.
          </li>
          <li>
            Club Declaration (Print this out, complete this form and get it
            signed by a committee member of the football club)
          </li>
          <li>
            Physician Declaration (Print this out, complete this form with the
            assistance of your doctor/surgeon/physio who is helping you with
            your injury.
          </li>
        </ul>
        <p>
          When the Club Declaration and Physician Declaration forms are
          completed scan them and email them back to
          <a href="mailto:sportsclaims@echelonaustralia.com.au">
            sportsclaims@echelonaustralia.com.au and make reference in the email
            to the Online Reference Number you were provided with.
          </a>
        </p>
        <p>
          You will receive an email from Echelon acknowledging your claim. This
          email will provide you with your claim number that you need to
          reference in any further correspondence when dealing with your claim.
        </p>
        <p>
          The next step is to collect all evidence (Invoices and Receipts) of
          out-of-pocket expenses incurred by you in order to submit these to
          Echelon via
          <a href="mailto:sportsclaims@echelonaustralia.com.au">
            sportsclaims@echelonaustralia.com.au so that they can be considered.
            Keep everything! But please note that there are items you can and
            cannot claim under this insurance, which will be referenced below.
          </a>
        </p>
        <p>
          Allow a few weeks for the claims to be processed and for you to be
          contacted back.
        </p>
        <p>
          You will be contacted and supplied with an itemised list of claimed
          items, and a total of what you will get back.
        </p>
        <p class="mb-2">
          However, if you do not hear anything, go to
          <a href="https://sport.marshadvantage.com.au/afl/contact">
            https://sport.marshadvantage.com.au/afl/contact and submit a query
            and ensure to quote your Claim Number to speed up the process.
          </a>
        </p>
        <h2 className="title blue-text">Expectations and Entitlements</h2>
        <p>
          This section advises you what to expect to get back, what you can and
          cannot claim and what you are covered for under the insurance.
        </p>
        <p>Level of Cover: BRONZE</p>
        <p>Excess per Claim: $100 (this is subtracted from your payout) </p>
        <p>
          Reimbursement per Claim: You will be entitled to 50% of your total out
          of pocket expenses on eligible items
        </p>
        <p>Maximum Reimbursement per Claim: $2,000 </p>
        <p>Loss of Income: No Income Protection Cover provided </p>
        <p>Death: $100,000</p>
        <p>Quad/Para Cover: $1,000,000</p>
        <h2>Examples of what you can Claim:</h2>
        <p className="mb-2">
          Basically, you can claim anything that has not be claimed through
          Medicare in the first instance. (not limited to)
        </p>
        <ul className="a-left show-dots">
          <li>Medication and Pharmaceuticals.</li>
          <li>Equipment Hire (Crutches/braces/rehab equipment)</li>
          <li>Physio</li>
          <li>Chiro</li>
          <li>Dental</li>
          <li>Ambulance</li>
          <li>Hospital Accommodation</li>
          <li>Acupuncture</li>
          <li>Osteopathy</li>
        </ul>
        <h2>Examples of what you CANNOT Claim:</h2>
        <p>
          Any GAP payment where you have received a reimbursement from Medicare.
          (not limited to)
        </p>
        <ul className="a-left show-dots mb-2">
          <li>Doctor's (GP) Visits</li>
          <li>Anaesthetists</li>
          <li>Loss of Income </li>
        </ul>
        <h2 className="title blue-text">
          Important information and disclaimers
        </h2>
        <p><strong>Player 's insurance/Injury Cover:</strong> </p>
        <ul className="a-left show-dots mb-2">
          <li>Is not private health cover.</li>
          <li>Is not Workers ' compensation cover.</li>
          <li>Will not provide a full rebate on injury management. </li>
        </ul>
        <p>
          It is recommended that all players have Private Health Insurance,
          including Ambulance cover.
        </p>
        <p>
          It is recommended that all players (in particular, players who own
          their own business) have appropriate Income Protection.
        </p>
        <p>
          Note: The information provided in the document is provided to you as a
          guide and is subject to change at anytime based on any changes to the
          insurance and insurance providers that the Perth Football League have
          made arrangements with.
        </p>
        <p>For more information visit the following websites:</p>
        <p>
          <a href="https://www.perthfootball.com.au/clubs/insurance">
            https://www.perthfootball.com.au/clubs/insurance
            <br />
          </a>
          <a href="https://sport.marshadvantage.com.au/afl">
            https://sport.marshadvantage.com.au/afl/
          </a>
        </p>
        <p>
          For further information/clarification on insurance please contact a
          member of the Club Committee.
        </p>
        <div>
          <p>
            Whitford Warriors - Players Insurance Information Sheet Last
            Updated: 22nd September 2021
          </p>
        </div>
      </div>
    </>
  );
};

export default InsurancePage;
