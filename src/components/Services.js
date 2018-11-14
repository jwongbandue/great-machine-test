import React, { Component } from "react";
import style from "./styles/Services.css";
export default class Services extends Component {
  render() {
    return (
      <div className={`section Section ${style.container}`}>
        <div className={`${style.aligner}`}>
          <div className={`${style.parentFlex}`}>
            <div className={`${style.mainHeader}`}>
              <h1 className={`Plaak`}>SERVICES</h1>
              <p className={`MarkProBook`}>
                Great Machine helps you embrace <br />
                AI with thinking and making
              </p>
            </div>
            <div className={style.flex}>
              <div className={style.thinking} />
              <div className={style.thinkingContainer}>
                {/* ===================== BRAND AI STRATEGY ===================== */}
                <div>
                  <h1 className={`Plaak ${style.header}`}>BRAND AI STRATEGY</h1>
                  <p className={`MarkProBook ${style.copy} `}>
                    A unifying AI vision for the future of the company. E.g.
                    mission statement, manifesto, vision video.
                  </p>
                </div>
                {/* ===================== AI CORPORATE PLAYBOOK ===================== */}
                <div>
                  <h1 className={`Plaak ${style.header}`}>
                    AI CORPORATE PLAYBOOK
                  </h1>
                  <p className={`MarkProBook ${style.copy} `}>
                    An actionable plan for how, when, and why to pursue AI
                    projects. E.g. AI 101 whitepapers, action plans, decision
                    trees.
                  </p>
                </div>
                {/* ===================== AI THOUGHT LEADERSHIP ===================== */}
                <div>
                  <h1 className={`Plaak ${style.header}`}>
                    AI THOUGHT LEADERSHIP
                  </h1>
                  <p className={`MarkProBook ${style.copy} `}>
                    Bring your organization up to speed on the future of AI and
                    Machine Learning. E.g. symposiums, C-Suite presentations,
                    monthly newsletters.
                  </p>
                </div>
              </div>
            </div>
            <div className={style.flex}>
              <div className={style.making} />
              <div className={style.makingContainer}>
                {/* MAKING */}
                {/* ===================== BOTS & CONVERSATIONAL INTERFACES ===================== */}
                <div>
                  <h1 className={`Plaak ${style.header}`}>
                    BOTS & CONVERSATIONAL INTERFACES
                  </h1>
                  <p className={`MarkProBook ${style.copy}`}>
                    Bots and voice experiences designed to speak and listen to
                    the user like a human being.
                  </p>
                </div>
                {/* ===================== PREDICTIVE & ANTICIPATORY SYSTEMS ===================== */}
                <div>
                  <h1 className={`Plaak ${style.header}`}>
                    PREDICTIVE & ANTICIPATORY SYSTEMS
                  </h1>
                  <p className={`MarkProBook ${style.copy}`}>
                    Systems that find relevant patterns in huge pools of data —
                    helping you anticipate what people eat, wear, watch, and
                    buy.
                  </p>
                </div>
                {/* ===================== INTERNET OF THINGS ===================== */}
                <div>
                  <h1 className={`Plaak ${style.header}`}>
                    INTERNET OF THINGS
                  </h1>
                  <p className={`MarkProBook ${style.copy}`}>
                    The world is now one big, connected system. AI can help
                    navigate and connect people with the objects in the real,
                    physical world.
                  </p>
                </div>
                {/* ===================== COGNITIVE ASSISTANTS ===================== */}
                <div>
                  <h1 className={`Plaak ${style.header}`}>
                    COGNITIVE ASSISTANTS
                  </h1>
                  <p className={`MarkProBook ${style.copy}`}>
                    Think customer service agents, personal assistants, and
                    machine — driven collaborators — systems that learn and do
                    the dirty work so people can focus on doing better things
                    with their time.
                  </p>
                </div>
                {/* ===================== SMART PROCESS AUTOMATION ===================== */}
                <div>
                  <h1 className={`Plaak ${style.header}`}>
                    SMART PROCESS AUTOMATION
                  </h1>
                  <p className={`MarkProBook ${style.copy}`}>
                    Machine learning can distill massive amounts of unstructured
                    and unwieldy information into a cohesive whole to deliver a
                    better experience for the human on the other side.
                  </p>
                </div>
                {/* ===================== COGNITIVE PERSONALIZATION ===================== */}
                <div>
                  <h1 className={`Plaak ${style.header}`}>
                    COGNITIVE PERSONALIZATION
                  </h1>
                  <p className={`MarkProBook ${style.copy}`}>
                    Use AI to compare data sets from people, predicting the
                    perfect personalized experience — CRM on steroids.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
