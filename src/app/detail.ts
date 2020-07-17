export interface IEmployee {
    id: number;
    fullName: string;
    email: string;
    phone?: number;
    contactPreference: string;
    skills: ISkill[];
}
export interface ISkill {
    skillName: string;
    experienceInYears: number;
    proficiency: string;
}