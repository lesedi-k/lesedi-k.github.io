import { StaticImageData } from "next/image"
import { FunctionComponent } from "react"

export type CardProps = {
  Employer: string[]
  Job: string,
  Description: string,
  img: StaticImageData | null,
}

export type CardComponent = FunctionComponent<CardProps>
