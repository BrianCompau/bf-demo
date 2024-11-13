import React from 'react';
import { render, screen } from '@testing-library/react';
import styled from 'styled-components'
import Canvas from "better-frames-1"
import GeometryDisplay from './GeometryDisplay'
import ButtonCounter from './ButtonCounter'
import VideoPlayer from './VideoPlayer'


const canvas = new Canvas()
canvas.addFrame(GeometryDisplay, {canvas})

test('Canvas creates Frame', () => {
    
})