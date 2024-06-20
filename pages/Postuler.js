import styles from "../styles/Postuler.module.css"
import HeaderAdmin from "@/components/HeaderAdmin"
import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function Postuler(){
    return(
        <>
        <HeaderAdmin/>
        <div className={styles.form}>
        <Card className={styles.card} >
      <CardHeader>
        <CardTitle className={styles.cardTitle}>Vous désirez postuler ?</CardTitle>
        <CardDescription className={styles.description} >Entrez vos informations et envoyez vos données avec le formulaire ci dessous pour pouvoir participer à nos formations..</CardDescription>
      </CardHeader>
      <CardContent>
        <form >
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
             
              <Input id="name" placeholder="Veuillez entrer votre nom" />
            </div>
            <div className="flex flex-col space-y-1.5">
              
              <Input id="name" placeholder="Veuillez entrer votre adresse mail" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
      
      <Input id="picture" type="file" />
    </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className={styles.btn}>Envoyez</Button>
      </CardFooter>
    </Card>
    </div>
        </>
    )
}