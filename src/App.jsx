import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Target, Users, FileCheck, TrendingUp, CheckCircle, AlertCircle, BarChart3, Award } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Title Slide
    {
      type: 'title',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white p-12">
          <Shield className="w-24 h-24 mb-6 animate-pulse" />
          <h1 className="text-6xl font-bold mb-4 text-center">ISO 27001:2022</h1>
          <h2 className="text-3xl mb-8 text-center text-blue-200">Implementation Project</h2>
          <div className="w-32 h-1 bg-blue-400 mb-8"></div>
          <p className="text-2xl mb-2 text-blue-100">El Hayat Private Hospital</p>
          <p className="text-lg text-blue-300 mb-8">Complete Project Summary</p>
          <div className="mt-8 text-sm text-blue-200">
            <p className="mb-2">ISMS Implementation Team:</p>
            <p>Akram Abid • Meriah Ibrahim Abderrahim</p>
            <p>Tahraoui Mustapha • Youcef Zeraibi</p>
            <p className="mt-4">December 2025</p>
          </div>
        </div>
      )
    },
    
    // Project Overview
    {
      type: 'content',
      title: 'Project Overview',
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Project Scope
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Full ISO 27001:2022 implementation for El Hayat Private Hospital</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Duration: 6 weeks (Nov 10 - Dec 11, 2025)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Scope: All clinical and administrative systems</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Team: 4 implementation specialists</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-600">
            <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center gap-2">
              <Award className="w-6 h-6" />
              Key Achievements
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-blue-600 mb-1">347</p>
                <p className="text-sm text-gray-600">Assets Identified</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-green-600 mb-1">247</p>
                <p className="text-sm text-gray-600">Staff Trained (100%)</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-purple-600 mb-1">65%</p>
                <p className="text-sm text-gray-600">Security Improvement</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-orange-600 mb-1">14</p>
                <p className="text-sm text-gray-600">Security Roles</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-red-600 mb-1">6</p>
                <p className="text-sm text-gray-600">Security Objectives</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="text-3xl font-bold text-indigo-600 mb-1">12M</p>
                <p className="text-sm text-gray-600">DZD Budget</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Phase 1
    {
      type: 'content',
      title: 'Phase 1: Management Support',
      subtitle: 'November 10-11, 2025',
      icon: Users,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-900">What We Did</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Secured executive commitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Approved 12M DZD budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Appointed ISMS Manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Established governance framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Defined project charter</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-green-900">Key Deliverables</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Project Charter (ELHAYAT-PC-01)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Management Commitment Evidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Governance Framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>RACI Matrix</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Steering Committee Charter</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <div>
                <p className="font-bold text-lg">Key Achievement</p>
                <p className="text-amber-50">Director General signed project charter - demonstrating top management commitment to information security</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Phase 2
    {
      type: 'content',
      title: 'Phase 2: ISMS Scope Definition',
      subtitle: 'November 11, 2025',
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-purple-900">What We Did</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Identified internal/external issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Mapped 22 interested parties</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Defined organizational context</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Established scope boundaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Documented legal requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-indigo-900">Key Deliverables</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>Context Register (ELHAYAT-CONTEXT-01)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>Interested Parties Register</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>Scope Statement (ELHAYAT-SS-01)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>Legal Requirements Register</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>Communication Procedures</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" />
              <div>
                <p className="font-bold text-lg">Key Achievement</p>
                <p className="text-blue-50">Clear scope definition covering EMR, PACS, LIS, HR systems - enabling focused risk assessment</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Phase 3
    {
      type: 'content',
      title: 'Phase 3: Gap Analysis',
      subtitle: 'November 12, 2025',
      icon: BarChart3,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-red-900">What We Did</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Assessed current vs. desired state</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Interviewed department heads</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Identified 27 significant gaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Prioritized by risk criticality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Updated project plan</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-orange-900">Key Deliverables</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Gap Analysis Report (ELHAYAT-GAP-01)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Current State Assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Desired State Matrix</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Updated Project Plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Priority Action List</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8" />
              <div>
                <p className="font-bold text-lg">Critical Finding</p>
                <p className="text-red-50">42% phishing click rate and missing MFA identified as highest priority gaps requiring immediate action</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Phase 4
    {
      type: 'content',
      title: 'Phase 4: Security Policy & Objectives',
      subtitle: 'November 13-19, 2025',
      icon: FileCheck,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-teal-900">What We Did</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Developed Information Security Policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Set 6 measurable objectives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Established document control</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Defined communication processes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Obtained management approval</span>
                </li>
              </ul>
            </div>

            <div className="bg-cyan-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-cyan-900">Key Deliverables</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Information Security Policy (ELHAYAT-POL-01)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Security Objectives Register</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Document Control Procedure</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Communication Procedure</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span>Policy Approval Evidence</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <div>
                <p className="font-bold text-lg">Key Achievement</p>
                <p className="text-teal-50">Director General signed Information Security Policy - making information security official hospital policy</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Phase 5
    {
      type: 'content',
      title: 'Phase 5: Competence Assurance',
      subtitle: 'November 14-27, 2025',
      icon: Users,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-violet-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-violet-900">What We Did</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>Identified 14 security roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>Assessed 247 staff competence</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>Delivered targeted training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>Conducted phishing simulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                  <span>Measured effectiveness</span>
                </li>
              </ul>
            </div>

            <div className="bg-fuchsia-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-fuchsia-900">Key Deliverables</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                  <span>Competence Procedure (ELHAYAT-PROC-COMP-01)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                  <span>Training Program Plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                  <span>Awareness Campaign Calendar</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                  <span>Competence Evidence Register</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-fuchsia-600 mt-0.5 flex-shrink-0" />
                  <span>Training Effectiveness Report</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8" />
              <p className="font-bold text-lg">Measurable Results</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm mb-1">Security Test Scores</p>
                <p className="text-2xl font-bold">48% → 79%</p>
                <p className="text-sm text-violet-200">(+65% improvement)</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm mb-1">Phishing Clicks</p>
                <p className="text-2xl font-bold">42% → 18%</p>
                <p className="text-sm text-violet-200">(-57% reduction)</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm mb-1">Staff Trained</p>
                <p className="text-2xl font-bold">247</p>
                <p className="text-sm text-violet-200">(100% completion)</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Phase 6
    {
      type: 'content',
      title: 'Phase 6: Asset Inventory',
      subtitle: 'November 28 - December 11, 2025',
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-emerald-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-emerald-900">What We Did</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Identified 347 total assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Established classification policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Implemented labeling procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Assigned asset ownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Mapped asset dependencies</span>
                </li>
              </ul>
            </div>

            <div className="bg-lime-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-lime-900">Key Deliverables</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>Asset Inventory (ELHAYAT-INVENTORY-01)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>Classification Policy (ELHAYAT-POL-CLASS-01)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>Labeling Procedure (ELHAYAT-PROC-LABEL-01)</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>Asset Management Procedure</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileCheck className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span>Ownership Assignment Matrix</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-8 h-8" />
              <p className="font-bold text-lg">Inventory Statistics</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
                <p className="text-3xl font-bold mb-1">347</p>
                <p className="text-sm text-emerald-100">Total Assets</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
                <p className="text-3xl font-bold mb-1">38</p>
                <p className="text-sm text-emerald-100">Confidential Assets</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
                <p className="text-3xl font-bold mb-1">215</p>
                <p className="text-sm text-emerald-100">Critical Assets (62%)</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center">
                <p className="text-3xl font-bold mb-1">14</p>
                <p className="text-sm text-emerald-100">Asset Owners</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // KPIs
    {
      type: 'content',
      title: 'Key Performance Indicators',
      icon: TrendingUp,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Performance Improvement Metrics</h3>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Metric</th>
                    <th className="px-6 py-4 text-center font-semibold">Before</th>
                    <th className="px-6 py-4 text-center font-semibold">After</th>
                    <th className="px-6 py-4 text-center font-semibold">Change</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Security Awareness Test Scores</td>
                    <td className="px-6 py-4 text-center text-red-600 font-bold">48%</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">79%</td>
                    <td className="px-6 py-4 text-center"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">+65%</span></td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Phishing Simulation Click Rate</td>
                    <td className="px-6 py-4 text-center text-red-600 font-bold">42%</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">18%</td>
                    <td className="px-6 py-4 text-center"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">-57%</span></td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Policy Awareness</td>
                    <td className="px-6 py-4 text-center text-red-600 font-bold">35%</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">82%</td>
                    <td className="px-6 py-4 text-center"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">+134%</span></td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Assets Documented</td>
                    <td className="px-6 py-4 text-center text-gray-500 font-bold">Unknown</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">347</td>
                    <td className="px-6 py-4 text-center"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">New</span></td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Staff Trained</td>
                    <td className="px-6 py-4 text-center text-red-600 font-bold">0</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">247</td>
                    <td className="px-6 py-4 text-center"><span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">100%</span></td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Security Roles Defined</td>
                    <td className="px-6 py-4 text-center text-red-600 font-bold">0</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">14</td>
                    <td className="px-6 py-4 text-center"><span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">New</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-600">
            <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
              <Award className="w-6 h-6" />
              Overall Project Success
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">100% of phase deliverables completed on schedule</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">All ISO 27001 clauses addressed systematically</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Sustainable processes established for ongoing management</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Ready for risk assessment phase</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Next Steps
    {
      type: 'content',
      title: 'Next Steps & Recommendations',
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-600">
            <h3 className="text-2xl font-bold mb-4 text-indigo-900 flex items-center gap-2">
              <Target className="w-7 h-7" />
              Immediate Next Phase
            </h3>
            <div className="bg-white p-5 rounded-lg shadow-sm mb-4">
              <p className="font-bold text-lg text-gray-800 mb-3">Phase 7: Risk Assessment and Treatment</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Conduct formal risk assessment using asset inventory</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Develop risk treatment plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Implement priority security controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Establish risk monitoring processes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold mb-4 text-purple-900 flex items-center gap-2">
              <TrendingUp className="w-7 h-7" />
              Long-term Sustainability
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-gray-800 mb-2">📅 Quarterly management reviews</p>
                <p className="text-sm text-gray-600">Regular assessment of ISMS performance and objectives</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-gray-800 mb-2">🔍 Annual internal audits</p>
                <p className="text-sm text-gray-600">Systematic evaluation of ISMS compliance</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-gray-800 mb-2">🎓 Continuous staff awareness program</p>
                <p className="text-sm text-gray-600">Ongoing training and security culture development</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-semibold text-gray-800 mb-2">⚠️ Regular risk assessment updates</p>
                <p className="text-sm text-gray-600">Dynamic threat landscape monitoring</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm col-span-2">
                <p className="font-semibold text-gray-800 mb-2">🏆 Preparation for certification audit</p>
                <p className="text-sm text-gray-600">Documentation review and readiness assessment for external audit</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8" />
              <div>
                <p className="font-bold text-lg">Critical Success Factor</p>
                <p className="text-amber-50">Maintain management commitment and continue resource allocation for ongoing ISMS operation</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Thank You Slide
    {
      type: 'closing',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white p-12">
          <Award className="w-32 h-32 mb-8 text-yellow-300 animate-pulse" />
          <h1 className="text-7xl font-bold mb-6">Thank You</h1>
          <div className="w-40 h-1 bg-purple-400 mb-8"></div>
          <p className="text-3xl mb-12 text-purple-200">Questions?</p>
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
            <p className="text-xl mb-4 text-purple-100">ISMS Implementation Team</p>
            <p className="text-2xl font-semibold text-white mb-2">El Hayat Private Hospital</p>
            <div className="mt-6 text-sm text-purple-200 space-y-1">
              <p>Akram Abid • Meriah Ibrahim Abderrahim</p>
              <p>Tahraoui Mustapha • Youcef Zeraibi</p>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-2 text-purple-300">
            <Shield className="w-5 h-5" />
            <p className="text-sm">ISO 27001:2022 Certified Implementation</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Main Slide Area */}
      <div className="flex-1 relative overflow-hidden bg-white shadow-2xl">
        {currentSlideData.type === 'title' || currentSlideData.type === 'closing' ? (
          currentSlideData.content
        ) : (
          <div className="h-full p-12 overflow-y-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                {Icon && <Icon className="w-10 h-10 text-blue-600" />}
                <h2 className="text-4xl font-bold text-gray-900">{currentSlideData.title}</h2>
              </div>
              {currentSlideData.subtitle && (
                <p className="text-lg text-gray-600 ml-13">{currentSlideData.subtitle}</p>
              )}
            </div>
            {currentSlideData.content}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-8 py-4 flex items-center justify-between shadow-lg">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
            currentSlide === 0
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-blue-500'
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-white font-semibold">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === slides.length - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg'
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;