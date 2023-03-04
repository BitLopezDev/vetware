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
            //create
        } catch(err) {
            throw new Error(err.toString());
        } finally {
            return data;
        }
            

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
