const express = require('express');
const mysql = require('mysql');
const { Op } = require('sequelize');
const boom = require('@hapi/boom');
const {models} = require('express');

class ProductService  {

    constructor() {
        this.products =[];
    }

    async create({data}) {
        try {
           // const newProduct = await
            //create
        } catch(err) {
            throw new Error(err.toString());
        } finally {
            return data;
        }
            

    }

    async findMany({query}){

        const options = {
            include: ['category'],
            ...query
        };

        


    }

    async findOne(id, ...other) {
        //const product = find the product
        if(!product){
            //error
        }
    }

    async update (id, {changes}){
        //code
    }

    async delete(id, user_id, ...props) {

    }

    async delete({data}) {
        try {

        } catch(err) {
            throw new Error(err.toString());
        } finally {
            return data;
        }
            //create

    }



}

module.export = ProductService;