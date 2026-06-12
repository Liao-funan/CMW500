# Configuring a BLER Measurement

Module: LTE Signaling
Source: e1280d5c8e2848b5.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
BLER Tests
 > 
Configuring a BLER Measurement
Configuring a BLER Measurement
// *****************************************************************************
// Activate DL padding.
// *****************************************************************************
CONFigure:LTE:SIGN:CONNection:DLPadding ON
// *****************************************************************************
// Configure a continuous BLER measurement without stop condition and
// 1000 subframes per measurement cycle. NACK and DTX contribute to the BLER.
// *****************************************************************************
CONFigure:LTE:SIGN:EBLer:SCONdition NONE
CONFigure:LTE:SIGN:EBLer:REPetition CONT
CONFigure:LTE:SIGN:EBLer:SFRames 1000
CONFigure:LTE:SIGN:EBLer:ERCalc ERC1
// *****************************************************************************
// Configure a confidence BLER measurement.
// The stop condition "Confidence Level" sets also the repetition.
// NACK and DTX contribute to the BLER, wait for all carriers,
// no minimum test time, ER limit 5%.
// *****************************************************************************
CONFigure:LTE:SIGN:EBLer:SCONdition CLEV
CONFigure:LTE:SIGN:EBLer:ERCalc ERC1
CONFigure:LTE:SIGN:EBLer:CONFidence:OASCondition ACWait
CONFigure:LTE:SIGN:EBLer:CONFidence:MTTime 0
CONFigure:LTE:SIGN:EBLer:CONFidence:LERate P050
Top