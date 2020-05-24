
export interface CardProps {
    cardData: CardDetails;    
}

export interface CardDetails {
    uname: string;
    content?: string;
    avatarUrl?: string;   
    contentImg?: string; 
}