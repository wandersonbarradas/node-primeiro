import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    let showAge: boolean = false;
    let age = 24;
    if (age >= 18) {
        showAge = true;
    }
    res.render("home", {
        user: {
            name: "Wanderson",
            age,
            showAge,
            products: [
                { name: "Produto X", price: 25 },
                { name: "Produto Y", price: 10 },
                { name: "Produto Z", price: 36 },
            ],
            receita: ["Farinha de trigo", "Açucar", "Cenoura", "Fermento"],
        },
    });
});

router.get("/sobre", (req: Request, res: Response) => {
    res.send("Pagina Sobre");
});

router.get("/contato", (req: Request, res: Response) => {
    res.send("Pagina Contato");
});

router.get("/user", (req: Request, res: Response) => {
    res.json({
        name: "João Pedro",
        lastName: "Santos",
        age: 27,
    });
});

export default router;
