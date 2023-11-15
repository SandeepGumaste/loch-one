export interface WhaleCardProps{
    iconUrl:string;
    action?:"save"|"checkbox";
    content:React.ReactNode;
    footer:React.ReactNode
  }

  export interface TestimonialCardProps{
    name:string;
    designation:string
    review:string;

}