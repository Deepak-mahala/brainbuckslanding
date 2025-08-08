"use client";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function () {
    const router = useRouter();
    return(
        <>
            <div className="mx-auto  bg-white">
                <div className="max-w-7xl mx-auto px-4 py-10 text-gray-800">
                <div className="text-gray-800 mt-14">
                        <h1 onClick={()=> router.push("/")} className="cursor-pointer"><CircleArrowLeft className="size-8"/></h1>
                    </div>
                <h1 className="text-3xl font-bold text-center text-[#2c215d] mb-8">
                    Participation Rules & Policies
                </h1>
                <h1 className="mb-4 text-2xl">Brainbucks Rules and Terms :</h1>
                <div className="space-y-6">
                    <p><strong>1.</strong> This is “Not a gambling app” but contains financial risks.</p>

                    <p><strong>2.</strong> Rewards in regular contests and quizzes are based upon the number of participants that join the contests.</p>

                    <p><strong>3.</strong> There are two types of contests: 1. Free to Join and, 2. Paid (Includes an Entry Fee)</p>

                    <p><strong>4.</strong> There are also some live contests to join and participate in in real-time.</p>

                    <p><strong>5.</strong> For the Paid Contests, the entry fee varies from contest to contest.</p>

                    <div>
                    <p className="font-semibold">6. Rules for selecting a winner of the quiz and distributing the prize pool:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                        Total of top 20% participants are considered as Winning group of a quiz, who receives the cash prize at the end of the quiz. Formula for calculating the Winners is:
                        <br />
                        <code className="block bg-gray-100 px-2 py-1 rounded">r = ( 20 * TP)/100</code>
                        r = Number of Winners<br />
                        TP = Total number of participants participating in the quiz.
                        </li>
                        <li>
                        The winners are determined by the accuracy of the answers they give to the questions asked in the quiz, accuracy is determined by the following formula:
                        <br />
                        <code className="block bg-gray-100 px-2 py-1 rounded">A = (( Nc )/ Nq)*100</code>
                        Where,<br />
                        A = Accuracy<br />
                        Nc = Total number of questions answered correctly<br />
                        Nq = Total number of questions asked.
                        </li>
                        <li>
                        For example: the total amount of players participating in a quiz are total 100, and the entry fees for each participant is 10 BB Coins, then the total prize pool sums up to 800 BB Coins, therefore this prize pool will be distributed among top 20% players that is to top 20 players in this case.
                        </li>
                        <li>
                        Distribution of the prize among winners:
                        <ul className="list-disc pl-6 space-y-2">
                            <li>The achiever with the highest amount of accuracy gets the biggest chunk of prize pool.</li>
                            <li>
                            The distribution of prize pool is determined by the following formula:
                            <br />
                            <code className="block bg-gray-100 px-2 py-1 rounded">pp = [((r-R) + r)*PP]/Tp</code>
                            Where,<br />
                            pp = Prize to be received by winner.<br />
                            R = Rank of Winner<br />
                            r = Total number of winners<br />
                            PP = Total amount of prize pool<br />
                            Tp = Total Participants of the quiz
                            </li>
                            <li>
                            For Example : If in the previous scenario the total number of Winners ( r ) are 20 and the amount of prize pool ( PP ) is 800 BB Coins and the Total Participants (Tp) are 100, then according to the above formula, winner with the rank 1, will get a Prize ( pp ) of 312 BB Coins and the winner with rank 2 will get a prize of 304 BB Coins and so on.
                            </li>
                        </ul>
                        </li>
                        <li>
                        In case of Tie:
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                            If the accuracy of 2 players comes same with the above mentioned formula, then the player completing quiz With lower Average Time Per Question (T) is selected on a higher rank, formula of calculating T is as follows :
                            <br />
                            <code className="block bg-gray-100 px-2 py-1 rounded">T = (t/q)</code>
                            Where,<br />
                            T = Average Time per Question<br />
                            t = Total time taken to complete the quiz in seconds<br />
                            q = Total number of questions asked in the quiz
                            </li>
                            <li>
                            For example : If accuracy of 2 participants , let the name of participants be “A” and “B” came same in a quiz containing total 10 Questions but the total time taken by “A” to complete the quiz ( t ) was 20 Seconds and the total time taken by “B” to complete the quiz ( t ) was 25 Seconds, then Participant “A’s” Average Time Per Question ( T ) is 2 Seconds , according to the above mentioned formula, whereas Participant “B” is having Average Time per Question ( T ) is 2.5 Seconds, therefore according to the algorithm Participant A will be assigned a higher Rank than Participant B.
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </div>

                    <p><strong>7.</strong> For Paid contest a total of 20% commision will be charged by Brain Bucks, for instance if the total number of participants participating in a quiz contest is 100 and the participation fees is INR 100 per Participant, which will result into a total prize pool of INR 10,000, brain bucks will deduct 20% i.e INR 2,000 from the principal amount, which will lead to net distribution of INR 8,000 among 100 Participants.</p>

                    <p><strong>8.</strong> The entry fee is paid and converted into our standard BB Coin which is our platform-limited virtual currency(Not a Cryptocurrency), & 1 BB Coin represents 0.01 INR or 100 BB coins = INR 1.00</p>

                    <p><strong>9.</strong> A 30% of the TDS amount will be applicable and deducted as per Government/RBI Tax rules on the reward amount(Profit) is more than ₹10,000, for instance, you’ve joined a quiz where you have paid a participation fee of ₹ 100 and the reward you won is ₹11,000 so the actual amount you’ll get will be ₹ 11,000 - ₹ 100 = ₹ 10,900 - 30% = ₹ 89.7 (INR).</p>

                    <p><strong>10.</strong> If the winning amount is less than 10,000 INR, then the user is not liable to pay any TDS</p>

                    <p><strong>11.</strong> The Payout for the rewards the user won in the regular quizzes will be directly credited into the user's account and the user can redeem that amount directly into their bank accounts. The payout will be done using the RazorpayX payout service.</p>

                    <p><strong>12.</strong> We invite users to participate in various subject or topic-based quizzes, the questions the quizzes belong to different subjects e.g. general knowledge, science, chemistry, mathematics, physics, and more. If the quiz has an entry fee, the user pays the fee and then joins in the quiz. If the user failed to join the quiz is considered eliminated, and if more than 1 user joins the quiz the amount for the joining doesn’t get refunded. If only 1 user joins the quiz, at the end of the quiz his amount is refunded or won by him because no other users joined that quiz.</p>
                </div>
                </div>
            </div>

        </>
    )
}