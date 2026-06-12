# CONFigureGSMSIGNiNCELlLTECELLn

Module: GSM Signaling
Source: 3be7d21eef6a453a.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Neighbor Cell
 > 
CONFigure:GSM:SIGN<i>:NCELl:LTE:CELL<n>
CONFigure:GSM:SIGN<i>:NCELl:LTE:CELL<n> 
<Enable>, <Band>, <Channel>, <CellID>[, <Measurement>]
Configures an entry of the neighbor cell list for LTE.
Suffix: 
<n>
1..4
Number of the neighbor cell
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
 
 OB15 |
 
 OB16 |
 
 OB17 |
 
 OB18 |
 
 OB19 |
 
 OB20 |
 
 OB21 |
 
 OB22 |
 
 OB23 |
 
 OB24 |
 
 OB25 |
 
 OB26 |
 
 OB27 |
 
 OB28 |
 
 OB29 |
 
 OB30 |
 
 OB31 |
 
 OB32 |
 
 OB33 |
 
 OB34 |
 
 OB35 |
 
 OB36 |
 
 OB37 |
 
 OB38 |
 
 OB39 |
 
 OB40 |
 
 OB41 |
 
 OB42 |
 
 OB43 |
 
 OB44 |
 
 OB45 |
 
 OB46 |
 
 OB65 |
 
 OB66 |
 
 OB67 |
 
 OB252 |
 
 OB255
Operating bands 1 to 46, 65 to 67, 252, 255
*RST:
OB1
<Channel>
Downlink channel number
Range: 
Depending on operating band, see tables below
*RST:
300
<CellID>
Physical cell ID (scrambling code)
Range: 
0  to  503
*RST:
0
<Measurement>
OFF |
 
 ON
Enables or disables the MS neighbor cell measurement
*RST:
OFF
Example: 
See 
"Configuring Neighbor Cell and Reselection Parameters"
Firmware/Software: 
V3.2.20
V3.2.30 added <Measurement>
V3.5.10 added <Band> 
OB44
V3.7.10 added <Band> 
OB45, OB46, OB65, OB66, OB67, OB252, OB255
Manual operation: 
See 
"LTE"
Channel number range depending on LTE FDD band
FDD band
Channel no. N
DL
1
0 to 599
2
600 to 1199
3
1200 to 1949
4
1950 to 2399
5
2400 to 2649
6
2650 to 2749
7
2750 to 3449
8
3450 to 3799
9
3800 to 4149
10
4150 to 4749
11
4750 to 4949
12
5010 to 5179
13
5180 to 5279
14
5280 to 5379
15
5380 to 5579
16
5580 to 5729
17
5730 to 5849
18
5850 to 5999
19
6000 to 6149
20
6150 to 6449
21
6450 to 6599
22
6600 to 7499
23
7500 to 7699
24
7700 to 8039
25
8040 to 8689
26
8690 to 9039
27
9040 to 9209
28
9210 to 9659
29
9660 to 9769
30
9770 to 9869
31
9870 to 9919
32
9920 to 10359
65
65536 to 66435
66
66436 to 67135
67136 to 67335
67
67336 to 67535
252
255242 to 256046
255
261092 to 261896
Channel number range depending on LTE TDD band
TDD band
Channel no. N
33
36000 to 36199
34
36200 to 36349
35
36350 to 36949
36
36950 to 37549
37
37550 to 37749
38
37750 to 38249
39
38250 to 38649
40
38650 to 39649
41
39650 to 41589
42
41590 to 43589
43
43590 to 45589
44
45590 to 46589
45
46590 to 46789
46
46790 to 54539
Top