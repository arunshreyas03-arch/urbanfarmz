export type MembershipPlanType = 'starter' | 'family' | 'pro' | 'general';

export interface MembershipPlan {
  id: MembershipPlanType;
  name: string;
  size: string;
  monthlyPrice: string;
  quarterlyPrice: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  email?: string;
  preferredMembership: MembershipPlanType;
  preferredVisitDate: string;
  message?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

