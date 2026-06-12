# ROUTeLTESIGNiSCENarioCFF[FLEXible]INTernal

Module: LTE Signaling
Source: 5ac2048b70bc4ccf.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Scenario Selection and Signal Routing
 > 
ROUTe:LTE:SIGN<i>:SCENario:CFF[:FLEXible]:INTernal
ROUTe:LTE:SIGN<i>:SCENario:CFF[:FLEXible]:INTernal 
<PCCBBBoard>, <RXConnect>, <RXConvert>, <PCCTX1Connect>, <PCCTX1Convert>, <PCCTX2Connect>, <PCCTX2Convert>, <SCC1BBBoard>, <SCC1TX1Connect>, <SCC1TX1Convert>, <SCC1TX2Connect>, <SCC1TX2Convert>, <SCC2BBBoard>, <SCC2TX1Connect>, <SCC2TX1Convert>, <SCC2TX2Connect>, <SCC2TX2Convert>[, <PCCFadingBoard>, <SCC1FadingBoard>, <SCC2FadingBoard>[, <Coprocessor>]]
Activates the scenario "3CC - Fading - nx2 nx2 nx2" with internal fading and selects the signal paths.
For possible parameter values, see 
"Values for Signal Path Selection"
.
Parameters:
<PCCBBBoard>
Signaling unit for the PCC
<RXConnect>
RF connector for the PCC input path
<RXConvert>
RX module for the PCC input path
<PCCTX1Connect>
RF connector for the first PCC output path
<PCCTX1Convert>
TX module for the first PCC output path
<PCCTX2Connect>
RF connector for the second PCC output path
<PCCTX2Convert>
TX module for the second PCC output path
<SCC1BBBoard>
Signaling unit for the SCC1
<SCC1TX1Connect>
RF connector for the first SCC1 output path
<SCC1TX1Convert>
TX module for the first SCC1 output path
<SCC1TX2Connect>
RF connector for the second SCC1 output path
<SCC1TX2Convert>
TX module for the second SCC1 output path
<SCC2BBBoard>
Signaling unit for the SCC2
<SCC2TX1Connect>
RF connector for the first SCC2 output path
<SCC2TX1Convert>
TX module for the first SCC2 output path
<SCC2TX2Connect>
RF connector for the second SCC2 output path
<SCC2TX2Convert>
TX module for the second SCC2 output path
<PCCFadingBoard>
Internal fader for the PCC
<SCC1FadingBoard>
Internal fader for the SCC1
<SCC2FadingBoard>
Internal fader for the SCC2
<Coprocessor>
SUA for coprocessing
Firmware/Software: 
V3.5.30, V3.7.10 added fader selection
V3.7.30 added <Coprocessor>
Options: 
R&S CMW-KS512, -KS520, -KE500
Top