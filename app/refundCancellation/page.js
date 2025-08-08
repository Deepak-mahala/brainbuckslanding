"use client";
import { CircleArrowLeft } from "lucide-react";

export default function () {
    return(
        <>
            <div className="mx-auto bg-white">
                <div className="mx-auto max-w-7xl py-10 px-4 gap-10 text-gray-800">
                    <div className="text-gray-800 mb-5 mt-14">
                        <h1 onClick={()=> router.push("/")} className="cursor-pointer"><CircleArrowLeft className="size-8"/></h1>
                    </div>
                     <h2 className="text-gray-800 font-medium text-3xl mb-8 mt-5 text-center">Refund Policy</h2>
                        <p><strong>Last Updated: 12 December, 2024</strong></p>

                        <h2 className="text-gray-800 font-medium text-2xl mb-5 mt-5">1. GENERAL</h2>
                        <p>a. This website with the URL of http://brainbucks.in/ ("Website/Site") is operated by Tech BrainBucks Infosoft Private Limited ("We/Our/Us").</p>
                        <p>b. We are committed to providing Our customers with the highest quality Services. However, on rare occasions, Services may be found to be deficient. In such cases, We offer refund in accordance with this Refund Policy ("Policy").</p>
                        <p>c. You are advised to read Our Terms and Conditions along with this Policy at the following webpage: https://brainbucks.in/term&condition.html.</p>
                        <p>d. By using this website, You agree to be bound by the terms contained in this Policy without modification. If You do not agree to the terms contained in this Policy, You are advised not to transact on this website.</p>
                        <p>e. We offer a 3 days refund Policy for the eligible Services.</p>
                        <p>f. Please read this Policy before availing service on this Website, so that You understand Your rights as well as what You can expect from Us if You are not happy with Your purchase.</p>

                        <h2 className="text-gray-800 font-medium text-2xl mb-5 mt-5">2. DEFINITIONS</h2>
                        <p>a. "Business Days" - means a day that is not a Saturday, Sunday, public holiday, or bank holiday in India or in the state where our office is located.</p>
                        <p>b. "Customer" - means a person who avails services for consideration and does not include commercial purchases.</p>
                        <p>c. "Date of Transaction" - means the date of invoice of the service, which includes the date of renewal processed in accordance with the terms and conditions of the applicable service agreement.</p>
                        <p>d. "Website" - means this website with the URL: http://brainbucks.in/.</p>

                        <h2 className="text-gray-800 font-medium text-2xl mb-5 mt-5">3. REFUNDS RULES</h2>
                        <p>a. Every effort is made so as to service the orders placed, as per the specifications and timelines mentioned with respect to a Services. If due to any unforeseen circumstances or limitations from Our side, the service is not provided then such order stands cancelled and the amount paid by You is refunded.</p>
                        <p>b. We will not process a refund if You have placed the order for the wrong service.</p>
                        <p>c. When you make a qualifying refund request. We may refund the full amount, less any additional cost incurred by Us in providing such Services.</p>
                        <p>d. Refund shall only be considered once the Customer concerned produces relevant documents and proof.</p>
                        <p>e. Once qualified, the refunds are applied to the original payment option.</p>
                        <p>f. The request for a refund of Services can be made in the following manner: In case of a quiz cancellation the candidate will receive automatic refund within 3 days, other than this condition there is a strict no refund policy.</p>

                        <h2 className="text-gray-800 font-medium text-2xl mb-5 mt-5">4. ORDER NOT CONFIRMED BUT AMOUNT DEDUCTED</h2>
                        <p>a. If the amount has been deducted and the order is not confirmed, please do contact Your respective bank. It takes 7 (seven) Business Days to reverse back the amount by the respective bank.</p>
                        <p>b. If the issue has not been resolved within 7 (seven) Business Days, you can contact Our customer care support as follows: support@brainbucks.in.</p>

                        <h2 className="text-gray-800 font-medium text-2xl mb-5 mt-5">5. EXEMPTIONS</h2>
                        <p>a. Notwithstanding the other provisions of this Policy, We may refuse to provide a refund for a service if:</p>
                        <p>I. You knew or were made aware of the problem(s) with the service before you availed it.</p>
                        <p>II. Free Services.</p>
                        <p>III. Refund requests are placed after the refund window is closed.</p>
                        <p>b. Apart from the above, the following exemptions are applicable when it comes to the refund:</p>
                        <p>• Appearing quiz fees</p>
                        <p>• Paid up quiz fees</p>
                        <p>• Paid up talentfest examination fees</p>

                        <h2 className="text-gray-800 font-medium text-2xl mb-5 mt-5">6. YOUR DATA</h2>
                        <p>The privacy of your data supplied to Us during the return and refund procedure is also governed by our privacy policy, which can be accessed under the following link: https://brainbucks.in/privacy.html.</p>

                        <h2 className="text-gray-800 font-medium text-2xl mb-5 mt-5">7. RESPONSE TIME</h2>
                        <p>a. Refunds are normally processed within 3 Business Days after checking the veracity of the refund request.</p>
                        <p>b. The period of refund may also depend on various banking and payment channels, and We will not be liable for any errors or delays in a refund due to banks or third-party service providers.</p>

                        <h2 className="text-gray-800 font-medium text-2xl mb-5 mt-5">8. REFUSAL OF RETURN OR REFUND REQUEST</h2>
                        <p>We reserve the right to refuse any request for a refund if such request is not in compliance with this Policy or applicable laws.</p>

                        <h2 className="text-gray-800 font-medium text-2xl mb-5 mt-5">9. CONTACT US</h2>
                        <p>For any feedback, concern, or query, You may please reach out to Us on the contact details below.</p>
                        <p><strong>Customer Care:</strong> support@brainbucks.in</p>
                </div>
            </div>
        </>
    )
}