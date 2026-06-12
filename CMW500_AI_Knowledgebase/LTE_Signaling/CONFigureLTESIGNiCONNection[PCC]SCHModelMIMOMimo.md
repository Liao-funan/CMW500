# CONFigureLTESIGNiCONNection[PCC]SCHModelMIMOMimo

Module: LTE Signaling
Source: f07adf8be556450b.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
MIMO Channel Model TM 2 to TM 6
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:SCHModel:MIMO<Mimo>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:SCHModel:MIMO<Mimo> 
<h11abs>, <h11phi>, <h12abs>, <h12phi>, <h13abs>, <h13phi>, <h14abs>, <h14phi>, <h21abs>, <h21phi>, <h22abs>, <h22phi>, <h23abs>, <h23phi>, <h24abs>, <h24phi>[, <h31abs>, <h31phi>, <h32abs>, <h32phi>, <h33abs>, <h33phi>, <h34abs>, <h34phi>, <h41abs>, <h41phi>, <h42abs>, <h42phi>, <h43abs>, <h43phi>, <h44abs>, <h44phi>]
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:SCHModel:MIMO<Mimo> 
<h11abs>, <h11phi>, <h12abs>, <h12phi>, <h13abs>, <h13phi>, <h14abs>, <h14phi>, <h21abs>, <h21phi>, <h22abs>, <h22phi>, <h23abs>, <h23phi>, <h24abs>, <h24phi>[, <h31abs>, <h31phi>, <h32abs>, <h32phi>, <h33abs>, <h33phi>, <h34abs>, <h34phi>, <h41abs>, <h41phi>, <h42abs>, <h42phi>, <h43abs>, <h43phi>, <h44abs>, <h44phi>]
Configures the coefficients of the user-defined channel model, characterizing the radio channel for MIMO 4x2 or MIMO 4x4.
There are two types of parameters:
<hnmabs> defines the square of the magnitude of the channel coefficient nm:
<hnmabs> = (h
nm
)
2
The sum of all <h1mabs> must equal 1:
<h11abs> + <h12abs> + <h13abs> + <h14abs> = 1
The same applies to <h2mabs>, <h3mabs> and <h4mabs>.
<hnmphi> defines the phase of the channel coefficient nm:
<hnmphi> = 
φ
(h
nm
)
The phase can be entered in steps of 15 degrees. The setting is rounded, if necessary.
The *RST values depend on <Mimo> and are listed as *RST 4x2 / *RST 4x4.
Suffix: 
<Mimo>
42, 44
MIMO 4x2 or 4x4
The optional parameters in [...] are only relevant for 4x4.
<c>
1..4
Parameters:
<h11abs>
Range: 
0  to  1
*RST:
0.25 / 1
<h11phi>
Range: 
0 deg  to  345 deg
*RST:
0 deg / 0 deg
Default unit: 
deg
<h12abs>
Range: 
0  to  1
*RST:
0.25 / 0
<h12phi>
Range: 
0 deg  to  345 deg
*RST:
0 deg / 0 deg
Default unit: 
deg
<h13abs>
Range: 
0  to  1
*RST:
0.25 / 0
<h13phi>
Range: 
0 deg  to  345 deg
*RST:
0 deg / 0 deg
Default unit: 
deg
<h14abs>
Range: 
0  to  1
*RST:
0.25 / 0
<h14phi>
Range: 
0 deg  to  345 deg
*RST:
270 deg / 0 deg
Default unit: 
deg
<h21abs>
Range: 
0  to  1
*RST:
0.25 / 0
<h21phi>
Range: 
0 deg  to  345 deg
*RST:
270 deg / 0 deg
Default unit: 
deg
<h22abs>
Range: 
0  to  1
*RST:
0.25 / 1
<h22phi>
Range: 
0 deg  to  345 deg
*RST:
90 deg / 0 deg
Default unit: 
deg
<h23abs>
Range: 
0  to  1
*RST:
0.25 / 0
<h23phi>
Range: 
0 deg  to  345 deg
*RST:
90 deg / 0 deg
Default unit: 
deg
<h24abs>
Range: 
0  to  1
*RST:
0.25 / 0
<h24phi>
Range: 
0 deg  to  345 deg
*RST:
180 deg / 0 deg
Default unit: 
deg
<h31abs>
Range: 
0  to  1
*RST:
- / 0
<h31phi>
Range: 
0 deg  to  345 deg
*RST:
- / 0 deg
Default unit: 
deg
<h32abs>
Range: 
0  to  1
*RST:
- / 0
<h32phi>
Range: 
0 deg  to  345 deg
*RST:
- / 0 deg
Default unit: 
deg
<h33abs>
Range: 
0  to  1
*RST:
- / 1
<h33phi>
Range: 
0 deg  to  345 deg
*RST:
- / 0 deg
Default unit: 
deg
<h34abs>
Range: 
0  to  1
*RST:
- / 0
<h34phi>
Range: 
0 deg  to  345 deg
*RST:
- / 0 deg
Default unit: 
deg
<h41abs>
Range: 
0  to  1
*RST:
- / 0
<h41phi>
Range: 
0 deg  to  345 deg
*RST:
- / 0 deg
Default unit: 
deg
<h42abs>
Range: 
0  to  1
*RST:
- / 0
<h42phi>
Range: 
0 deg  to  345 deg
*RST:
- / 0 deg
Default unit: 
deg
<h43abs>
Range: 
0  to  1
*RST:
- / 0
<h43phi>
Range: 
0 deg  to  345 deg
*RST:
- / 0 deg
Default unit: 
deg
<h44abs>
Range: 
0  to  1
*RST:
- / 1
<h44phi>
Range: 
0 deg  to  345 deg
*RST:
- / 0 deg
Default unit: 
deg
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.0.50, SCC command V3.2.50
V3.7.10 MIMO 4x4
Options: 
R&S CMW-KS521 for MIMO 4x2
R&S CMW-KS540 for MIMO 4x4
Manual operation: 
See 
"4x2 channel model"
Top