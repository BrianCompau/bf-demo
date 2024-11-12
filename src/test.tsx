import React from 'react';
import { render, screen } from '@testing-library/react';
import styled from 'styled-components'
import Canvas from "better-frames-1"
import Pink from './Pink'
import Red from './Red'
import Green from './Green'


const canvas = new Canvas()
canvas.addFrame(Pink, {canvas})

test('Canvas creates Frame', () => {
    
})