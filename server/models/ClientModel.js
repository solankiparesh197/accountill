import express from 'express'
import mongoose from 'mongoose'

const ClientSchema = mongoose.Schema({
    organisation: String,
    name: String,
    email: String,
    phone: String,
    gstNo: String,
    address: String,
    userId: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const ClientModel = mongoose.model('ClientModel', ClientSchema)
export default ClientModel