// package: steward.v4
// file: balancer_pool_flash_loan.proto

import * as jspb from "google-protobuf";
import * as a_token_pb from "./a_token_pb";
import * as debt_token_pb from "./debt_token_pb";
import * as aave_v3_a_token_pb from "./aave_v3_a_token_pb";
import * as aave_v3_debt_token_pb from "./aave_v3_debt_token_pb";
import * as c_token_pb from "./c_token_pb";
import * as erc4626_pb from "./erc4626_pb";
import * as f_token_pb from "./f_token_pb";
import * as morpho_aave_v2_a_token_pb from "./morpho_aave_v2_a_token_pb";
import * as morpho_aave_v2_debt_token_pb from "./morpho_aave_v2_debt_token_pb";
import * as morpho_aave_v3_a_token_collateral_pb from "./morpho_aave_v3_a_token_collateral_pb";
import * as morpho_aave_v3_a_token_p2p_pb from "./morpho_aave_v3_a_token_p2p_pb";
import * as morpho_aave_v3_debt_token_pb from "./morpho_aave_v3_debt_token_pb";
import * as morpho_blue_collateral_pb from "./morpho_blue_collateral_pb";
import * as morpho_blue_debt_pb from "./morpho_blue_debt_pb";
import * as morpho_blue_supply_pb from "./morpho_blue_supply_pb";
import * as uniswap_v3_pb from "./uniswap_v3_pb";
import * as swap_with_uniswap_pb from "./swap_with_uniswap_pb";
import * as fees_and_reserves_pb from "./fees_and_reserves_pb";
import * as zero_x_pb from "./zero_x_pb";
import * as oneinch_pb from "./oneinch_pb";
import * as vesting_simple_pb from "./vesting_simple_pb";
import * as cellar_adaptor_pb from "./cellar_adaptor_pb";
import * as aave_v2_enable_asset_as_collateral_adaptor_pb from "./aave_v2_enable_asset_as_collateral_adaptor_pb";
import * as legacy_cellar_adaptor_pb from "./legacy_cellar_adaptor_pb";
import * as debt_f_token_pb from "./debt_f_token_pb";
import * as collateral_f_token_pb from "./collateral_f_token_pb";
import * as aura_erc4626_pb from "./aura_erc4626_pb";
import * as convex_curve_pb from "./convex_curve_pb";
import * as curve_pb from "./curve_pb";
import * as staking_pb from "./staking_pb";

export class BalancerPoolAdaptorV1FlashLoan extends jspb.Message {
  hasMakeFlashLoan(): boolean;
  clearMakeFlashLoan(): void;
  getMakeFlashLoan(): BalancerPoolAdaptorV1FlashLoan.MakeFlashLoan | undefined;
  setMakeFlashLoan(value?: BalancerPoolAdaptorV1FlashLoan.MakeFlashLoan): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalancerPoolAdaptorV1FlashLoan.AsObject;
  static toObject(includeInstance: boolean, msg: BalancerPoolAdaptorV1FlashLoan): BalancerPoolAdaptorV1FlashLoan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalancerPoolAdaptorV1FlashLoan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalancerPoolAdaptorV1FlashLoan;
  static deserializeBinaryFromReader(message: BalancerPoolAdaptorV1FlashLoan, reader: jspb.BinaryReader): BalancerPoolAdaptorV1FlashLoan;
}

export namespace BalancerPoolAdaptorV1FlashLoan {
  export type AsObject = {
    makeFlashLoan?: BalancerPoolAdaptorV1FlashLoan.MakeFlashLoan.AsObject,
  }

  export class MakeFlashLoan extends jspb.Message {
    clearTokensList(): void;
    getTokensList(): Array<string>;
    setTokensList(value: Array<string>): void;
    addTokens(value: string, index?: number): string;

    clearAmountsList(): void;
    getAmountsList(): Array<string>;
    setAmountsList(value: Array<string>): void;
    addAmounts(value: string, index?: number): string;

    clearDataList(): void;
    getDataList(): Array<BalancerPoolAdaptorV1FlashLoan.AdaptorCallForBalancerPoolFlashLoan>;
    setDataList(value: Array<BalancerPoolAdaptorV1FlashLoan.AdaptorCallForBalancerPoolFlashLoan>): void;
    addData(value?: BalancerPoolAdaptorV1FlashLoan.AdaptorCallForBalancerPoolFlashLoan, index?: number): BalancerPoolAdaptorV1FlashLoan.AdaptorCallForBalancerPoolFlashLoan;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MakeFlashLoan.AsObject;
    static toObject(includeInstance: boolean, msg: MakeFlashLoan): MakeFlashLoan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MakeFlashLoan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MakeFlashLoan;
    static deserializeBinaryFromReader(message: MakeFlashLoan, reader: jspb.BinaryReader): MakeFlashLoan;
  }

  export namespace MakeFlashLoan {
    export type AsObject = {
      tokensList: Array<string>,
      amountsList: Array<string>,
      dataList: Array<BalancerPoolAdaptorV1FlashLoan.AdaptorCallForBalancerPoolFlashLoan.AsObject>,
    }
  }

  export class AdaptorCallForBalancerPoolFlashLoan extends jspb.Message {
    getAdaptor(): string;
    setAdaptor(value: string): void;

    hasAaveATokenV1Calls(): boolean;
    clearAaveATokenV1Calls(): void;
    getAaveATokenV1Calls(): a_token_pb.AaveATokenAdaptorV1Calls | undefined;
    setAaveATokenV1Calls(value?: a_token_pb.AaveATokenAdaptorV1Calls): void;

    hasAaveDebtTokenV1Calls(): boolean;
    clearAaveDebtTokenV1Calls(): void;
    getAaveDebtTokenV1Calls(): debt_token_pb.AaveDebtTokenAdaptorV1Calls | undefined;
    setAaveDebtTokenV1Calls(value?: debt_token_pb.AaveDebtTokenAdaptorV1Calls): void;

    hasCompoundCTokenV2Calls(): boolean;
    clearCompoundCTokenV2Calls(): void;
    getCompoundCTokenV2Calls(): c_token_pb.CompoundCTokenAdaptorV2Calls | undefined;
    setCompoundCTokenV2Calls(value?: c_token_pb.CompoundCTokenAdaptorV2Calls): void;

    hasAaveATokenV2Calls(): boolean;
    clearAaveATokenV2Calls(): void;
    getAaveATokenV2Calls(): a_token_pb.AaveATokenAdaptorV2Calls | undefined;
    setAaveATokenV2Calls(value?: a_token_pb.AaveATokenAdaptorV2Calls): void;

    hasAaveDebtTokenV2Calls(): boolean;
    clearAaveDebtTokenV2Calls(): void;
    getAaveDebtTokenV2Calls(): debt_token_pb.AaveDebtTokenAdaptorV2Calls | undefined;
    setAaveDebtTokenV2Calls(value?: debt_token_pb.AaveDebtTokenAdaptorV2Calls): void;

    hasAaveV3ATokenV1Calls(): boolean;
    clearAaveV3ATokenV1Calls(): void;
    getAaveV3ATokenV1Calls(): aave_v3_a_token_pb.AaveV3ATokenAdaptorV1Calls | undefined;
    setAaveV3ATokenV1Calls(value?: aave_v3_a_token_pb.AaveV3ATokenAdaptorV1Calls): void;

    hasAaveV3DebtTokenV1Calls(): boolean;
    clearAaveV3DebtTokenV1Calls(): void;
    getAaveV3DebtTokenV1Calls(): aave_v3_debt_token_pb.AaveV3DebtTokenAdaptorV1Calls | undefined;
    setAaveV3DebtTokenV1Calls(value?: aave_v3_debt_token_pb.AaveV3DebtTokenAdaptorV1Calls): void;

    hasOneInchV1Calls(): boolean;
    clearOneInchV1Calls(): void;
    getOneInchV1Calls(): oneinch_pb.OneInchAdaptorV1Calls | undefined;
    setOneInchV1Calls(value?: oneinch_pb.OneInchAdaptorV1Calls): void;

    hasFeesAndReservesV1Calls(): boolean;
    clearFeesAndReservesV1Calls(): void;
    getFeesAndReservesV1Calls(): fees_and_reserves_pb.FeesAndReservesAdaptorV1Calls | undefined;
    setFeesAndReservesV1Calls(value?: fees_and_reserves_pb.FeesAndReservesAdaptorV1Calls): void;

    hasZeroXV1Calls(): boolean;
    clearZeroXV1Calls(): void;
    getZeroXV1Calls(): zero_x_pb.ZeroXAdaptorV1Calls | undefined;
    setZeroXV1Calls(value?: zero_x_pb.ZeroXAdaptorV1Calls): void;

    hasSwapWithUniswapV1Calls(): boolean;
    clearSwapWithUniswapV1Calls(): void;
    getSwapWithUniswapV1Calls(): swap_with_uniswap_pb.SwapWithUniswapAdaptorV1Calls | undefined;
    setSwapWithUniswapV1Calls(value?: swap_with_uniswap_pb.SwapWithUniswapAdaptorV1Calls): void;

    hasVestingSimpleV2Calls(): boolean;
    clearVestingSimpleV2Calls(): void;
    getVestingSimpleV2Calls(): vesting_simple_pb.VestingSimpleAdaptorV2Calls | undefined;
    setVestingSimpleV2Calls(value?: vesting_simple_pb.VestingSimpleAdaptorV2Calls): void;

    hasCellarV1Calls(): boolean;
    clearCellarV1Calls(): void;
    getCellarV1Calls(): cellar_adaptor_pb.CellarAdaptorV1Calls | undefined;
    setCellarV1Calls(value?: cellar_adaptor_pb.CellarAdaptorV1Calls): void;

    hasUniswapV3V2Calls(): boolean;
    clearUniswapV3V2Calls(): void;
    getUniswapV3V2Calls(): uniswap_v3_pb.UniswapV3AdaptorV2Calls | undefined;
    setUniswapV3V2Calls(value?: uniswap_v3_pb.UniswapV3AdaptorV2Calls): void;

    hasAaveV2EnableAssetAsCollateralV1Calls(): boolean;
    clearAaveV2EnableAssetAsCollateralV1Calls(): void;
    getAaveV2EnableAssetAsCollateralV1Calls(): aave_v2_enable_asset_as_collateral_adaptor_pb.AaveV2EnableAssetAsCollateralAdaptorV1Calls | undefined;
    setAaveV2EnableAssetAsCollateralV1Calls(value?: aave_v2_enable_asset_as_collateral_adaptor_pb.AaveV2EnableAssetAsCollateralAdaptorV1Calls): void;

    hasFTokenV1Calls(): boolean;
    clearFTokenV1Calls(): void;
    getFTokenV1Calls(): f_token_pb.FTokenAdaptorV1Calls | undefined;
    setFTokenV1Calls(value?: f_token_pb.FTokenAdaptorV1Calls): void;

    hasMorphoAaveV2ATokenV1Calls(): boolean;
    clearMorphoAaveV2ATokenV1Calls(): void;
    getMorphoAaveV2ATokenV1Calls(): morpho_aave_v2_a_token_pb.MorphoAaveV2ATokenAdaptorV1Calls | undefined;
    setMorphoAaveV2ATokenV1Calls(value?: morpho_aave_v2_a_token_pb.MorphoAaveV2ATokenAdaptorV1Calls): void;

    hasMorphoAaveV2DebtTokenV1Calls(): boolean;
    clearMorphoAaveV2DebtTokenV1Calls(): void;
    getMorphoAaveV2DebtTokenV1Calls(): morpho_aave_v2_debt_token_pb.MorphoAaveV2DebtTokenAdaptorV1Calls | undefined;
    setMorphoAaveV2DebtTokenV1Calls(value?: morpho_aave_v2_debt_token_pb.MorphoAaveV2DebtTokenAdaptorV1Calls): void;

    hasMorphoAaveV3ATokenCollateralV1Calls(): boolean;
    clearMorphoAaveV3ATokenCollateralV1Calls(): void;
    getMorphoAaveV3ATokenCollateralV1Calls(): morpho_aave_v3_a_token_collateral_pb.MorphoAaveV3ATokenCollateralAdaptorV1Calls | undefined;
    setMorphoAaveV3ATokenCollateralV1Calls(value?: morpho_aave_v3_a_token_collateral_pb.MorphoAaveV3ATokenCollateralAdaptorV1Calls): void;

    hasMorphoAaveV3ATokenP2pV1Calls(): boolean;
    clearMorphoAaveV3ATokenP2pV1Calls(): void;
    getMorphoAaveV3ATokenP2pV1Calls(): morpho_aave_v3_a_token_p2p_pb.MorphoAaveV3ATokenP2PAdaptorV1Calls | undefined;
    setMorphoAaveV3ATokenP2pV1Calls(value?: morpho_aave_v3_a_token_p2p_pb.MorphoAaveV3ATokenP2PAdaptorV1Calls): void;

    hasMorphoAaveV3DebtTokenV1Calls(): boolean;
    clearMorphoAaveV3DebtTokenV1Calls(): void;
    getMorphoAaveV3DebtTokenV1Calls(): morpho_aave_v3_debt_token_pb.MorphoAaveV3DebtTokenAdaptorV1Calls | undefined;
    setMorphoAaveV3DebtTokenV1Calls(value?: morpho_aave_v3_debt_token_pb.MorphoAaveV3DebtTokenAdaptorV1Calls): void;

    hasLegacyCellarV1Calls(): boolean;
    clearLegacyCellarV1Calls(): void;
    getLegacyCellarV1Calls(): legacy_cellar_adaptor_pb.LegacyCellarAdaptorV1Calls | undefined;
    setLegacyCellarV1Calls(value?: legacy_cellar_adaptor_pb.LegacyCellarAdaptorV1Calls): void;

    hasDebtFTokenV1Calls(): boolean;
    clearDebtFTokenV1Calls(): void;
    getDebtFTokenV1Calls(): debt_f_token_pb.DebtFTokenAdaptorV1Calls | undefined;
    setDebtFTokenV1Calls(value?: debt_f_token_pb.DebtFTokenAdaptorV1Calls): void;

    hasCollateralFTokenV1Calls(): boolean;
    clearCollateralFTokenV1Calls(): void;
    getCollateralFTokenV1Calls(): collateral_f_token_pb.CollateralFTokenAdaptorV1Calls | undefined;
    setCollateralFTokenV1Calls(value?: collateral_f_token_pb.CollateralFTokenAdaptorV1Calls): void;

    hasConvexCurveV1Calls(): boolean;
    clearConvexCurveV1Calls(): void;
    getConvexCurveV1Calls(): convex_curve_pb.ConvexCurveAdaptorV1Calls | undefined;
    setConvexCurveV1Calls(value?: convex_curve_pb.ConvexCurveAdaptorV1Calls): void;

    hasCurveV1Calls(): boolean;
    clearCurveV1Calls(): void;
    getCurveV1Calls(): curve_pb.CurveAdaptorV1Calls | undefined;
    setCurveV1Calls(value?: curve_pb.CurveAdaptorV1Calls): void;

    hasAuraErc4626V1Calls(): boolean;
    clearAuraErc4626V1Calls(): void;
    getAuraErc4626V1Calls(): aura_erc4626_pb.AuraERC4626AdaptorV1Calls | undefined;
    setAuraErc4626V1Calls(value?: aura_erc4626_pb.AuraERC4626AdaptorV1Calls): void;

    hasMorphoBlueCollateralV1Calls(): boolean;
    clearMorphoBlueCollateralV1Calls(): void;
    getMorphoBlueCollateralV1Calls(): morpho_blue_collateral_pb.MorphoBlueCollateralAdaptorV1Calls | undefined;
    setMorphoBlueCollateralV1Calls(value?: morpho_blue_collateral_pb.MorphoBlueCollateralAdaptorV1Calls): void;

    hasMorphoBlueDebtV1Calls(): boolean;
    clearMorphoBlueDebtV1Calls(): void;
    getMorphoBlueDebtV1Calls(): morpho_blue_debt_pb.MorphoBlueDebtAdaptorV1Calls | undefined;
    setMorphoBlueDebtV1Calls(value?: morpho_blue_debt_pb.MorphoBlueDebtAdaptorV1Calls): void;

    hasMorphoBlueSupplyV1Calls(): boolean;
    clearMorphoBlueSupplyV1Calls(): void;
    getMorphoBlueSupplyV1Calls(): morpho_blue_supply_pb.MorphoBlueSupplyAdaptorV1Calls | undefined;
    setMorphoBlueSupplyV1Calls(value?: morpho_blue_supply_pb.MorphoBlueSupplyAdaptorV1Calls): void;

    hasErc4626V1Calls(): boolean;
    clearErc4626V1Calls(): void;
    getErc4626V1Calls(): erc4626_pb.ERC4626AdaptorV1Calls | undefined;
    setErc4626V1Calls(value?: erc4626_pb.ERC4626AdaptorV1Calls): void;

    hasStakingV1Calls(): boolean;
    clearStakingV1Calls(): void;
    getStakingV1Calls(): staking_pb.StakingAdaptorV1Calls | undefined;
    setStakingV1Calls(value?: staking_pb.StakingAdaptorV1Calls): void;

    getCallDataCase(): AdaptorCallForBalancerPoolFlashLoan.CallDataCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdaptorCallForBalancerPoolFlashLoan.AsObject;
    static toObject(includeInstance: boolean, msg: AdaptorCallForBalancerPoolFlashLoan): AdaptorCallForBalancerPoolFlashLoan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdaptorCallForBalancerPoolFlashLoan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdaptorCallForBalancerPoolFlashLoan;
    static deserializeBinaryFromReader(message: AdaptorCallForBalancerPoolFlashLoan, reader: jspb.BinaryReader): AdaptorCallForBalancerPoolFlashLoan;
  }

  export namespace AdaptorCallForBalancerPoolFlashLoan {
    export type AsObject = {
      adaptor: string,
      aaveATokenV1Calls?: a_token_pb.AaveATokenAdaptorV1Calls.AsObject,
      aaveDebtTokenV1Calls?: debt_token_pb.AaveDebtTokenAdaptorV1Calls.AsObject,
      compoundCTokenV2Calls?: c_token_pb.CompoundCTokenAdaptorV2Calls.AsObject,
      aaveATokenV2Calls?: a_token_pb.AaveATokenAdaptorV2Calls.AsObject,
      aaveDebtTokenV2Calls?: debt_token_pb.AaveDebtTokenAdaptorV2Calls.AsObject,
      aaveV3ATokenV1Calls?: aave_v3_a_token_pb.AaveV3ATokenAdaptorV1Calls.AsObject,
      aaveV3DebtTokenV1Calls?: aave_v3_debt_token_pb.AaveV3DebtTokenAdaptorV1Calls.AsObject,
      oneInchV1Calls?: oneinch_pb.OneInchAdaptorV1Calls.AsObject,
      feesAndReservesV1Calls?: fees_and_reserves_pb.FeesAndReservesAdaptorV1Calls.AsObject,
      zeroXV1Calls?: zero_x_pb.ZeroXAdaptorV1Calls.AsObject,
      swapWithUniswapV1Calls?: swap_with_uniswap_pb.SwapWithUniswapAdaptorV1Calls.AsObject,
      vestingSimpleV2Calls?: vesting_simple_pb.VestingSimpleAdaptorV2Calls.AsObject,
      cellarV1Calls?: cellar_adaptor_pb.CellarAdaptorV1Calls.AsObject,
      uniswapV3V2Calls?: uniswap_v3_pb.UniswapV3AdaptorV2Calls.AsObject,
      aaveV2EnableAssetAsCollateralV1Calls?: aave_v2_enable_asset_as_collateral_adaptor_pb.AaveV2EnableAssetAsCollateralAdaptorV1Calls.AsObject,
      fTokenV1Calls?: f_token_pb.FTokenAdaptorV1Calls.AsObject,
      morphoAaveV2ATokenV1Calls?: morpho_aave_v2_a_token_pb.MorphoAaveV2ATokenAdaptorV1Calls.AsObject,
      morphoAaveV2DebtTokenV1Calls?: morpho_aave_v2_debt_token_pb.MorphoAaveV2DebtTokenAdaptorV1Calls.AsObject,
      morphoAaveV3ATokenCollateralV1Calls?: morpho_aave_v3_a_token_collateral_pb.MorphoAaveV3ATokenCollateralAdaptorV1Calls.AsObject,
      morphoAaveV3ATokenP2pV1Calls?: morpho_aave_v3_a_token_p2p_pb.MorphoAaveV3ATokenP2PAdaptorV1Calls.AsObject,
      morphoAaveV3DebtTokenV1Calls?: morpho_aave_v3_debt_token_pb.MorphoAaveV3DebtTokenAdaptorV1Calls.AsObject,
      legacyCellarV1Calls?: legacy_cellar_adaptor_pb.LegacyCellarAdaptorV1Calls.AsObject,
      debtFTokenV1Calls?: debt_f_token_pb.DebtFTokenAdaptorV1Calls.AsObject,
      collateralFTokenV1Calls?: collateral_f_token_pb.CollateralFTokenAdaptorV1Calls.AsObject,
      convexCurveV1Calls?: convex_curve_pb.ConvexCurveAdaptorV1Calls.AsObject,
      curveV1Calls?: curve_pb.CurveAdaptorV1Calls.AsObject,
      auraErc4626V1Calls?: aura_erc4626_pb.AuraERC4626AdaptorV1Calls.AsObject,
      morphoBlueCollateralV1Calls?: morpho_blue_collateral_pb.MorphoBlueCollateralAdaptorV1Calls.AsObject,
      morphoBlueDebtV1Calls?: morpho_blue_debt_pb.MorphoBlueDebtAdaptorV1Calls.AsObject,
      morphoBlueSupplyV1Calls?: morpho_blue_supply_pb.MorphoBlueSupplyAdaptorV1Calls.AsObject,
      erc4626V1Calls?: erc4626_pb.ERC4626AdaptorV1Calls.AsObject,
      stakingV1Calls?: staking_pb.StakingAdaptorV1Calls.AsObject,
    }

    export enum CallDataCase {
      CALL_DATA_NOT_SET = 0,
      AAVE_A_TOKEN_V1_CALLS = 2,
      AAVE_DEBT_TOKEN_V1_CALLS = 3,
      COMPOUND_C_TOKEN_V2_CALLS = 4,
      AAVE_A_TOKEN_V2_CALLS = 5,
      AAVE_DEBT_TOKEN_V2_CALLS = 6,
      AAVE_V3_A_TOKEN_V1_CALLS = 7,
      AAVE_V3_DEBT_TOKEN_V1_CALLS = 8,
      ONE_INCH_V1_CALLS = 9,
      FEES_AND_RESERVES_V1_CALLS = 10,
      ZERO_X_V1_CALLS = 11,
      SWAP_WITH_UNISWAP_V1_CALLS = 12,
      VESTING_SIMPLE_V2_CALLS = 13,
      CELLAR_V1_CALLS = 14,
      UNISWAP_V3_V2_CALLS = 15,
      AAVE_V2_ENABLE_ASSET_AS_COLLATERAL_V1_CALLS = 16,
      F_TOKEN_V1_CALLS = 17,
      MORPHO_AAVE_V2_A_TOKEN_V1_CALLS = 18,
      MORPHO_AAVE_V2_DEBT_TOKEN_V1_CALLS = 19,
      MORPHO_AAVE_V3_A_TOKEN_COLLATERAL_V1_CALLS = 20,
      MORPHO_AAVE_V3_A_TOKEN_P2P_V1_CALLS = 21,
      MORPHO_AAVE_V3_DEBT_TOKEN_V1_CALLS = 22,
      LEGACY_CELLAR_V1_CALLS = 23,
      DEBT_F_TOKEN_V1_CALLS = 24,
      COLLATERAL_F_TOKEN_V1_CALLS = 25,
      CONVEX_CURVE_V1_CALLS = 26,
      CURVE_V1_CALLS = 27,
      AURA_ERC4626_V1_CALLS = 28,
      MORPHO_BLUE_COLLATERAL_V1_CALLS = 29,
      MORPHO_BLUE_DEBT_V1_CALLS = 30,
      MORPHO_BLUE_SUPPLY_V1_CALLS = 31,
      ERC4626_V1_CALLS = 32,
      STAKING_V1_CALLS = 33,
    }
  }
}

export class BalancerPoolAdaptorV1FlashLoanCalls extends jspb.Message {
  clearCallsList(): void;
  getCallsList(): Array<BalancerPoolAdaptorV1FlashLoan>;
  setCallsList(value: Array<BalancerPoolAdaptorV1FlashLoan>): void;
  addCalls(value?: BalancerPoolAdaptorV1FlashLoan, index?: number): BalancerPoolAdaptorV1FlashLoan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BalancerPoolAdaptorV1FlashLoanCalls.AsObject;
  static toObject(includeInstance: boolean, msg: BalancerPoolAdaptorV1FlashLoanCalls): BalancerPoolAdaptorV1FlashLoanCalls.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BalancerPoolAdaptorV1FlashLoanCalls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BalancerPoolAdaptorV1FlashLoanCalls;
  static deserializeBinaryFromReader(message: BalancerPoolAdaptorV1FlashLoanCalls, reader: jspb.BinaryReader): BalancerPoolAdaptorV1FlashLoanCalls;
}

export namespace BalancerPoolAdaptorV1FlashLoanCalls {
  export type AsObject = {
    callsList: Array<BalancerPoolAdaptorV1FlashLoan.AsObject>,
  }
}

