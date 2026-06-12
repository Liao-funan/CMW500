# CONFigureLTESIGNiNCELlWCDMaCELLn

Module: LTE Signaling
Source: ea6535c1b9804424.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell Settings
 > 
CONFigure:LTE:SIGN<i>:NCELl:WCDMa:CELL<n>
CONFigure:LTE:SIGN<i>:NCELl:WCDMa:CELL<n> 
<Enable>, <Band>, <Channel>, <ScramblingCode>[, <Measurement>]
Configures the entry number <n> of the neighbor cell list for WCDMA.
Suffix: 
<n>
1..4
Parameters:
<Enable>
OFF |
 
 ON
Enables or disables the entry
*RST:
OFF
<Band>
OB1 |
 
 OB2 |
 
 OB3 |
 
 OB4 |
 
 OB5 |
 
 OB6 |
 
 OB7 |
 
 OB8 |
 
 OB9 |
 
 OB10 |
 
 OB11 |
 
 OB12 |
 
 OB13 |
 
 OB14 |
 
 OB19 |
 
 OB20 |
 
 OB21 |
 
 OB22 |
 
 OB25 |
 
 OBS1 |
 
 OBS2 |
 
 OBS3 |
 
 OBL1 |
 
 OB26
OB1, ..., OB14
: band I to XIV
OB19, ..., OB22
: band XIX to XXII
OB25, OB26
: band XXV, XXVI
OBS1
: band S
OBS2
: band S 170 MHz
OBS3
: band S 190 MHz
OBL1
: band L
*RST:
OB1
<Channel>
Downlink channel number
Range: 
412 to 11000, depending on operating band, see table below
*RST:
10563
<ScramblingCode>
Primary scrambling code
Range: 
#H0  to  #H1FF
*RST:
#H0
<Measurement>
OFF |
 
 ON
Disables / enables neighbor cell measurements for the entry
ON is only allowed if also <Enable> = ON
*RST:
OFF
Example: 
See 
"Configuring Neighbor Cells and Reselection"
Firmware/Software: 
V3.0.50, V3.5.40: OB22/OB25, V3.7.10: OB26
Options: 
R&S CMW-KS510 for neighbor cell measurements
Manual operation: 
See 
"WCDMA FDD"
Channel number range depending on operating band
Operating band
Channel number
OB1
10562 to 10838
OB2
412 to 687 (step 25), 9662 to 9938
OB3
1162 to 1513
OB4
1537 to 1738, 1887 to 2087 (step 25)
OB5
1007, 1012, 1032, 1037, 1062, 1087, 4357 to 4458
OB6
1037, 1062, 4387 to 4413
OB7
2237 to 2563, 2587 to 2912 (step 25)
OB8
2937 to 3088
OB9
9237 to 9387
OB10
3112 to 3388, 3412 to 3687 (step 25)
OB11
3712 to 3787
OB12
3842 to 3903, 3932, 3957, 3962, 3987, 3992
OB13
4017 to 4043, 4067, 4092
OB14
4117 to 4143, 4167, 4192
OB19
712 to 763, 787, 812, 837
OB20
4512 to 4638
OB21
862 to 912
OB22
4662 to 5038
OB25
5112 to 5413, 6292 to 6592 (step 25)
OB26
5762 to 5913, 5937, 5962, 5987, 5992, 6012, 6017, 6037, 6042, 6062, 6067, 6087
OBS1
10912 to 10988
OBS2
10900 to 10950
OBS3
10950 to 11000
OBL1
7637 to 7783, 7788 to 7933
Top