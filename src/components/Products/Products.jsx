import React from "react";
import { Grid } from "@mui/material";
import Product from "./product/Product"

const products = [
    { id: 1, name: "mango pickle", description: "Tasty mango pickle.", price: "300" },
    { id: 1, name: "Lemon pickle", description: "Tasty Lemon pickle.", price: "300" },
    { id: 1, name: "Ginger pickle", description: "Tasty Ginger pickle.", price: "300" },
    { id: 1, name: "Tamarind pickle", description: "Tasty Tamarind pickle.", price: "350" }
]

const Products = () => {
    return(
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) =>
                <Grid key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product ={product}></Product>
                </Grid>

            )}
        </Grid>
    </main>
    )
}

export default Products;