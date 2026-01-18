import process from 'node:process';
import React from 'react';
import test from 'ava';
import {render} from 'ink-testing-library';
import clearModule from 'clear-module';
import stripAnsi from 'strip-ansi';
import BigText from '../source/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
test('render', t => {
	process.env.FORCE_COLOR = '0';
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	clearModule.all();

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const {lastFrame} = render(<BigText text='unicorns'/>);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	console.log(lastFrame());
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	t.snapshot(stripAnsi(lastFrame()));

	delete process.env.FORCE_COLOR;
});
