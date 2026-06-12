# SOURceGPRFGENiLISTFILL

Module: GPRF Generator
Source: 8ce207ed606b461e.htm

## 原始指令文档说明
GPRF Generator
 > 
Command Reference
 > 
List Mode Settings
 > 
SOURce:GPRF:GEN<i>:LIST:FILL
SOURce:GPRF:GEN<i>:LIST:FILL 
<StartIndex>, <Range>, <IndexRepetition>, <StartFrequency>, <FreqIncrement>, <StartPower>, <PowerIncrement>[, <DwellTime>[, <Reenable>[, <Modulation>[, <StartGain>, <GainIncrement>]]]]
Convenience command to simplify the configuration of the frequency/level list.
Corresponding dialog box
Within a list segment determined by its start index and range (length), the frequency, power and (optionally) the digital gain are incremented by configurable step sizes. The other list item settings are fixed.
Setting parameters: 
<StartIndex>
The start index of the list segment to be "filled".
Range: 
0  to  1999
*RST:
0
<Range>
The range (length) of the list segment to be "filled".
Range: 
1  to  2000
*RST:
5
<IndexRepetition>
The constant "Index Repetition" within this list segment.
Range: 
1  to  10000
*RST:
1
<StartFrequency>
The frequency of list item <StartIndex>.
Range: 
7.0E+7 Hz to 6.0E+9 Hz
Default unit: 
Hz
<FreqIncrement>
The frequency increment within this list segment.
Range: 
-2.8245E+8 Hz to 1.20005E+9 Hz
Default unit: 
Hz
<StartPower>
The RMS level of list item <StartIndex>.
Range: 
-130 dBm to 0 dBm
Default unit: 
dBm
<PowerIncrement>
The power increment within this list segment.
Range: 
-29.5 dBm to 3 dBm
Default unit: 
dBm
<DwellTime>
The constant dwell time within this list segment.
Range: 
2.0E-4 s to 20 s
Default unit: 
s
<Reenable>
OFF |
 
 ON
The constant "Reenable" property within this list segment.
<Modulation>
OFF |
 
 ON
The constant "Modulation ON|OFF" property within this list segment.
<StartGain>
The digital gain of list item <StartIndex>.
Range: 
-30 dB to 0 dB
Default unit: 
dB
<GainIncrement>
The digital gain increment within this list segment.
Range: 
-7.5 dB to 0 dB
Default unit: 
dB
Usage: 
Event
Firmware/Software: 
V3.0.10
V3.0.12 maximum "Index Repetition" increased to 10000
Manual operation: 
See 
"Additional Softkeys and Hotkeys"
Top