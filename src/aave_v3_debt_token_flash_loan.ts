/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AaveATokenAdaptorV1Calls, AaveATokenAdaptorV2Calls } from "./a_token";
import { AaveV2EnableAssetAsCollateralAdaptorV1Calls } from "./aave_v2_enable_asset_as_collateral_adaptor";
import { AaveV3ATokenAdaptorV1Calls } from "./aave_v3_a_token";
import { AuraERC4626AdaptorV1Calls } from "./aura_erc4626";
import { BalancerPoolAdaptorV1Calls } from "./balancer_pool";
import { CompoundCTokenAdaptorV2Calls } from "./c_token";
import { CellarAdaptorV1Calls } from "./cellar_adaptor";
import { CollateralFTokenAdaptorV1Calls } from "./collateral_f_token";
import { ConvexCurveAdaptorV1Calls } from "./convex_curve";
import { CurveAdaptorV1Calls } from "./curve";
import { DebtFTokenAdaptorV1Calls } from "./debt_f_token";
import { AaveDebtTokenAdaptorV1Calls, AaveDebtTokenAdaptorV2Calls } from "./debt_token";
import { ERC4626AdaptorV1Calls } from "./erc4626";
import { FTokenAdaptorV1Calls } from "./f_token";
import { FeesAndReservesAdaptorV1Calls } from "./fees_and_reserves";
import { LegacyCellarAdaptorV1Calls } from "./legacy_cellar_adaptor";
import { MorphoAaveV2ATokenAdaptorV1Calls } from "./morpho_aave_v2_a_token";
import { MorphoAaveV2DebtTokenAdaptorV1Calls } from "./morpho_aave_v2_debt_token";
import { MorphoAaveV3ATokenCollateralAdaptorV1Calls } from "./morpho_aave_v3_a_token_collateral";
import { MorphoAaveV3ATokenP2PAdaptorV1Calls } from "./morpho_aave_v3_a_token_p2p";
import { MorphoAaveV3DebtTokenAdaptorV1Calls } from "./morpho_aave_v3_debt_token";
import { MorphoBlueCollateralAdaptorV1Calls } from "./morpho_blue_collateral";
import { MorphoBlueDebtAdaptorV1Calls } from "./morpho_blue_debt";
import { MorphoBlueSupplyAdaptorV1Calls } from "./morpho_blue_supply";
import { OneInchAdaptorV1Calls } from "./oneinch";
import { StakingAdaptorV1Calls } from "./staking";
import { SwapWithUniswapAdaptorV1Calls } from "./swap_with_uniswap";
import { UniswapV3AdaptorV2Calls } from "./uniswap_v3";
import { VestingSimpleAdaptorV2Calls } from "./vesting_simple";
import { ZeroXAdaptorV1Calls } from "./zero_x";

export const protobufPackage = "steward.v4";

/** Represents call data for the Aave Debt Token adaptor, used for borrowing and repaying debt on Aave. */
export interface AaveV3DebtTokenAdaptorV1FlashLoan {
  /** Represents function `flashLoan(address[] loanToken, uint256[] loanAmount, bytes params)` */
  flashLoan: AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan | undefined;
}

/**
 * Allows strategists to have Cellars take out flash loans
 *
 * Represents function `flashLoan(address[] loanToken, uint256[] loanAmount, bytes params)`
 */
export interface AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan {
  /** The addresses of the ERC20 tokens to borrow */
  loanTokens: string[];
  /** The amounts to borrow */
  loanAmounts: string[];
  /** The params to pass to the flash loan callback. */
  params: AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan[];
}

/** Represents a call to adaptor an. The cellar must be authorized to call the target adaptor. */
export interface AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan {
  /** Address of the adaptor */
  adaptor: string;
  /** Represents function calls to the AaveATokenAdaptor V1 */
  aaveATokenV1Calls?:
    | AaveATokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the AavaDebtTokenAdaptor V1 */
  aaveDebtTokenV1Calls?:
    | AaveDebtTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the CompoundCTokenAdaptor V2 */
  compoundCTokenV2Calls?:
    | CompoundCTokenAdaptorV2Calls
    | undefined;
  /** Represents function calls to the AaveATokenV2Adaptor */
  aaveATokenV2Calls?:
    | AaveATokenAdaptorV2Calls
    | undefined;
  /** Represents function calls to the AavaDebtTokenV2Adaptor */
  aaveDebtTokenV2Calls?:
    | AaveDebtTokenAdaptorV2Calls
    | undefined;
  /** Represents function calls to the AaveATokenV1Adaptor */
  aaveV3ATokenV1Calls?:
    | AaveV3ATokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the OneInchAdaptorV1 */
  oneInchV1Calls?:
    | OneInchAdaptorV1Calls
    | undefined;
  /** Represents function calls to the FeesAndReservesAdaptorV1 */
  feesAndReservesV1Calls?:
    | FeesAndReservesAdaptorV1Calls
    | undefined;
  /** Represents functionc alls to the ZeroXAdaptorV1 */
  zeroXV1Calls?:
    | ZeroXAdaptorV1Calls
    | undefined;
  /** Represents function calls to the SwapWithUniswapAdaptorV1 */
  swapWithUniswapV1Calls?:
    | SwapWithUniswapAdaptorV1Calls
    | undefined;
  /** Represents function calls to VestingSimpleAdaptor */
  vestingSimpleV2Calls?:
    | VestingSimpleAdaptorV2Calls
    | undefined;
  /** Represents function calls to the CellarAdaptor */
  cellarV1Calls?:
    | CellarAdaptorV1Calls
    | undefined;
  /** Represents function calls to the UniswapV3Adaptor V2 */
  uniswapV3V2Calls?:
    | UniswapV3AdaptorV2Calls
    | undefined;
  /** Represents function calls to the AaveV2EnableAssetAsCollatorAdaptor V1 */
  aaveV2EnableAssetAsCollateralV1Calls?:
    | AaveV2EnableAssetAsCollateralAdaptorV1Calls
    | undefined;
  /** Represents function calls to the FTokenAdaptor V1 */
  fTokenV1Calls?:
    | FTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the MorphoAaveV2AToken V1 */
  morphoAaveV2ATokenV1Calls?:
    | MorphoAaveV2ATokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the MorphoAaveV2DebtToken V1 */
  morphoAaveV2DebtTokenV1Calls?:
    | MorphoAaveV2DebtTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the MorphoAaveV3ATokenCollateral V1 */
  morphoAaveV3ATokenCollateralV1Calls?:
    | MorphoAaveV3ATokenCollateralAdaptorV1Calls
    | undefined;
  /** Represents function calls to the MorphoAaveV3ATokenP2P V1 */
  morphoAaveV3ATokenP2pV1Calls?:
    | MorphoAaveV3ATokenP2PAdaptorV1Calls
    | undefined;
  /** Represents function calls to the MorphoAaveV3DebtToken V1 */
  morphoAaveV3DebtTokenV1Calls?:
    | MorphoAaveV3DebtTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the BalancerPoolAdaptor V1 */
  balancerPoolV1Calls?:
    | BalancerPoolAdaptorV1Calls
    | undefined;
  /** Represents function calls to the LegacyCellarAdaptor V1 */
  legacyCellarV1Calls?:
    | LegacyCellarAdaptorV1Calls
    | undefined;
  /** Represents function calls to the DebtFTokenAdaptor V1 */
  debtFTokenV1Calls?:
    | DebtFTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls to the CollateralFTokenAdaptor V1 */
  collateralFTokenV1Calls?:
    | CollateralFTokenAdaptorV1Calls
    | undefined;
  /** Represents function calls for the ConvexCurveAdaptorV1 */
  convexCurveV1Calls?:
    | ConvexCurveAdaptorV1Calls
    | undefined;
  /** Represents function calls for the CurveAdaptorV1 */
  curveV1Calls?:
    | CurveAdaptorV1Calls
    | undefined;
  /** Represents function calls for the AuraERC4626AdaptorV1 */
  auraErc4626V1Calls?:
    | AuraERC4626AdaptorV1Calls
    | undefined;
  /** Represents function calls for the MorphoBlueCollateralAdaptorV1 */
  morphoBlueCollateralV1Calls?:
    | MorphoBlueCollateralAdaptorV1Calls
    | undefined;
  /** Represents function calls for the MorphoBlueDebtAdaptorV1 */
  morphoBlueDebtV1Calls?:
    | MorphoBlueDebtAdaptorV1Calls
    | undefined;
  /** Represents function calls for the MorphoBlueSupplyAdaptorV1 */
  morphoBlueSupplyV1Calls?:
    | MorphoBlueSupplyAdaptorV1Calls
    | undefined;
  /** Represents function calls for the ERC4626AdaptorV1 */
  erc4626V1Calls?:
    | ERC4626AdaptorV1Calls
    | undefined;
  /** Represents function calls for the StakingAdaptorV1 */
  stakingV1Calls?: StakingAdaptorV1Calls | undefined;
}

export interface AaveV3DebtTokenAdaptorV1FlashLoanCalls {
  calls: AaveV3DebtTokenAdaptorV1FlashLoan[];
}

function createBaseAaveV3DebtTokenAdaptorV1FlashLoan(): AaveV3DebtTokenAdaptorV1FlashLoan {
  return { flashLoan: undefined };
}

export const AaveV3DebtTokenAdaptorV1FlashLoan = {
  encode(message: AaveV3DebtTokenAdaptorV1FlashLoan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.flashLoan !== undefined) {
      AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan.encode(message.flashLoan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3DebtTokenAdaptorV1FlashLoan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3DebtTokenAdaptorV1FlashLoan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.flashLoan = AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV3DebtTokenAdaptorV1FlashLoan {
    return {
      flashLoan: isSet(object.flashLoan)
        ? AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan.fromJSON(object.flashLoan)
        : undefined,
    };
  },

  toJSON(message: AaveV3DebtTokenAdaptorV1FlashLoan): unknown {
    const obj: any = {};
    if (message.flashLoan !== undefined) {
      obj.flashLoan = AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan.toJSON(message.flashLoan);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1FlashLoan>, I>>(
    base?: I,
  ): AaveV3DebtTokenAdaptorV1FlashLoan {
    return AaveV3DebtTokenAdaptorV1FlashLoan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1FlashLoan>, I>>(
    object: I,
  ): AaveV3DebtTokenAdaptorV1FlashLoan {
    const message = createBaseAaveV3DebtTokenAdaptorV1FlashLoan();
    message.flashLoan = (object.flashLoan !== undefined && object.flashLoan !== null)
      ? AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan.fromPartial(object.flashLoan)
      : undefined;
    return message;
  },
};

function createBaseAaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan(): AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan {
  return { loanTokens: [], loanAmounts: [], params: [] };
}

export const AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan = {
  encode(message: AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.loanTokens) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.loanAmounts) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.params) {
      AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.loanTokens.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.loanAmounts.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.params.push(
            AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan {
    return {
      loanTokens: globalThis.Array.isArray(object?.loanTokens)
        ? object.loanTokens.map((e: any) => globalThis.String(e))
        : [],
      loanAmounts: globalThis.Array.isArray(object?.loanAmounts)
        ? object.loanAmounts.map((e: any) => globalThis.String(e))
        : [],
      params: globalThis.Array.isArray(object?.params)
        ? object.params.map((e: any) => AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan): unknown {
    const obj: any = {};
    if (message.loanTokens?.length) {
      obj.loanTokens = message.loanTokens;
    }
    if (message.loanAmounts?.length) {
      obj.loanAmounts = message.loanAmounts;
    }
    if (message.params?.length) {
      obj.params = message.params.map((e) => AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan>, I>>(
    base?: I,
  ): AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan {
    return AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan>, I>>(
    object: I,
  ): AaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan {
    const message = createBaseAaveV3DebtTokenAdaptorV1FlashLoan_FlashLoan();
    message.loanTokens = object.loanTokens?.map((e) => e) || [];
    message.loanAmounts = object.loanAmounts?.map((e) => e) || [];
    message.params =
      object.params?.map((e) => AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan(): AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan {
  return {
    adaptor: "",
    aaveATokenV1Calls: undefined,
    aaveDebtTokenV1Calls: undefined,
    compoundCTokenV2Calls: undefined,
    aaveATokenV2Calls: undefined,
    aaveDebtTokenV2Calls: undefined,
    aaveV3ATokenV1Calls: undefined,
    oneInchV1Calls: undefined,
    feesAndReservesV1Calls: undefined,
    zeroXV1Calls: undefined,
    swapWithUniswapV1Calls: undefined,
    vestingSimpleV2Calls: undefined,
    cellarV1Calls: undefined,
    uniswapV3V2Calls: undefined,
    aaveV2EnableAssetAsCollateralV1Calls: undefined,
    fTokenV1Calls: undefined,
    morphoAaveV2ATokenV1Calls: undefined,
    morphoAaveV2DebtTokenV1Calls: undefined,
    morphoAaveV3ATokenCollateralV1Calls: undefined,
    morphoAaveV3ATokenP2pV1Calls: undefined,
    morphoAaveV3DebtTokenV1Calls: undefined,
    balancerPoolV1Calls: undefined,
    legacyCellarV1Calls: undefined,
    debtFTokenV1Calls: undefined,
    collateralFTokenV1Calls: undefined,
    convexCurveV1Calls: undefined,
    curveV1Calls: undefined,
    auraErc4626V1Calls: undefined,
    morphoBlueCollateralV1Calls: undefined,
    morphoBlueDebtV1Calls: undefined,
    morphoBlueSupplyV1Calls: undefined,
    erc4626V1Calls: undefined,
    stakingV1Calls: undefined,
  };
}

export const AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan = {
  encode(
    message: AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.adaptor !== "") {
      writer.uint32(10).string(message.adaptor);
    }
    if (message.aaveATokenV1Calls !== undefined) {
      AaveATokenAdaptorV1Calls.encode(message.aaveATokenV1Calls, writer.uint32(18).fork()).ldelim();
    }
    if (message.aaveDebtTokenV1Calls !== undefined) {
      AaveDebtTokenAdaptorV1Calls.encode(message.aaveDebtTokenV1Calls, writer.uint32(26).fork()).ldelim();
    }
    if (message.compoundCTokenV2Calls !== undefined) {
      CompoundCTokenAdaptorV2Calls.encode(message.compoundCTokenV2Calls, writer.uint32(34).fork()).ldelim();
    }
    if (message.aaveATokenV2Calls !== undefined) {
      AaveATokenAdaptorV2Calls.encode(message.aaveATokenV2Calls, writer.uint32(42).fork()).ldelim();
    }
    if (message.aaveDebtTokenV2Calls !== undefined) {
      AaveDebtTokenAdaptorV2Calls.encode(message.aaveDebtTokenV2Calls, writer.uint32(50).fork()).ldelim();
    }
    if (message.aaveV3ATokenV1Calls !== undefined) {
      AaveV3ATokenAdaptorV1Calls.encode(message.aaveV3ATokenV1Calls, writer.uint32(58).fork()).ldelim();
    }
    if (message.oneInchV1Calls !== undefined) {
      OneInchAdaptorV1Calls.encode(message.oneInchV1Calls, writer.uint32(66).fork()).ldelim();
    }
    if (message.feesAndReservesV1Calls !== undefined) {
      FeesAndReservesAdaptorV1Calls.encode(message.feesAndReservesV1Calls, writer.uint32(74).fork()).ldelim();
    }
    if (message.zeroXV1Calls !== undefined) {
      ZeroXAdaptorV1Calls.encode(message.zeroXV1Calls, writer.uint32(82).fork()).ldelim();
    }
    if (message.swapWithUniswapV1Calls !== undefined) {
      SwapWithUniswapAdaptorV1Calls.encode(message.swapWithUniswapV1Calls, writer.uint32(90).fork()).ldelim();
    }
    if (message.vestingSimpleV2Calls !== undefined) {
      VestingSimpleAdaptorV2Calls.encode(message.vestingSimpleV2Calls, writer.uint32(98).fork()).ldelim();
    }
    if (message.cellarV1Calls !== undefined) {
      CellarAdaptorV1Calls.encode(message.cellarV1Calls, writer.uint32(106).fork()).ldelim();
    }
    if (message.uniswapV3V2Calls !== undefined) {
      UniswapV3AdaptorV2Calls.encode(message.uniswapV3V2Calls, writer.uint32(114).fork()).ldelim();
    }
    if (message.aaveV2EnableAssetAsCollateralV1Calls !== undefined) {
      AaveV2EnableAssetAsCollateralAdaptorV1Calls.encode(
        message.aaveV2EnableAssetAsCollateralV1Calls,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.fTokenV1Calls !== undefined) {
      FTokenAdaptorV1Calls.encode(message.fTokenV1Calls, writer.uint32(130).fork()).ldelim();
    }
    if (message.morphoAaveV2ATokenV1Calls !== undefined) {
      MorphoAaveV2ATokenAdaptorV1Calls.encode(message.morphoAaveV2ATokenV1Calls, writer.uint32(138).fork()).ldelim();
    }
    if (message.morphoAaveV2DebtTokenV1Calls !== undefined) {
      MorphoAaveV2DebtTokenAdaptorV1Calls.encode(message.morphoAaveV2DebtTokenV1Calls, writer.uint32(146).fork())
        .ldelim();
    }
    if (message.morphoAaveV3ATokenCollateralV1Calls !== undefined) {
      MorphoAaveV3ATokenCollateralAdaptorV1Calls.encode(
        message.morphoAaveV3ATokenCollateralV1Calls,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.morphoAaveV3ATokenP2pV1Calls !== undefined) {
      MorphoAaveV3ATokenP2PAdaptorV1Calls.encode(message.morphoAaveV3ATokenP2pV1Calls, writer.uint32(162).fork())
        .ldelim();
    }
    if (message.morphoAaveV3DebtTokenV1Calls !== undefined) {
      MorphoAaveV3DebtTokenAdaptorV1Calls.encode(message.morphoAaveV3DebtTokenV1Calls, writer.uint32(170).fork())
        .ldelim();
    }
    if (message.balancerPoolV1Calls !== undefined) {
      BalancerPoolAdaptorV1Calls.encode(message.balancerPoolV1Calls, writer.uint32(178).fork()).ldelim();
    }
    if (message.legacyCellarV1Calls !== undefined) {
      LegacyCellarAdaptorV1Calls.encode(message.legacyCellarV1Calls, writer.uint32(186).fork()).ldelim();
    }
    if (message.debtFTokenV1Calls !== undefined) {
      DebtFTokenAdaptorV1Calls.encode(message.debtFTokenV1Calls, writer.uint32(194).fork()).ldelim();
    }
    if (message.collateralFTokenV1Calls !== undefined) {
      CollateralFTokenAdaptorV1Calls.encode(message.collateralFTokenV1Calls, writer.uint32(202).fork()).ldelim();
    }
    if (message.convexCurveV1Calls !== undefined) {
      ConvexCurveAdaptorV1Calls.encode(message.convexCurveV1Calls, writer.uint32(210).fork()).ldelim();
    }
    if (message.curveV1Calls !== undefined) {
      CurveAdaptorV1Calls.encode(message.curveV1Calls, writer.uint32(218).fork()).ldelim();
    }
    if (message.auraErc4626V1Calls !== undefined) {
      AuraERC4626AdaptorV1Calls.encode(message.auraErc4626V1Calls, writer.uint32(226).fork()).ldelim();
    }
    if (message.morphoBlueCollateralV1Calls !== undefined) {
      MorphoBlueCollateralAdaptorV1Calls.encode(message.morphoBlueCollateralV1Calls, writer.uint32(234).fork())
        .ldelim();
    }
    if (message.morphoBlueDebtV1Calls !== undefined) {
      MorphoBlueDebtAdaptorV1Calls.encode(message.morphoBlueDebtV1Calls, writer.uint32(242).fork()).ldelim();
    }
    if (message.morphoBlueSupplyV1Calls !== undefined) {
      MorphoBlueSupplyAdaptorV1Calls.encode(message.morphoBlueSupplyV1Calls, writer.uint32(250).fork()).ldelim();
    }
    if (message.erc4626V1Calls !== undefined) {
      ERC4626AdaptorV1Calls.encode(message.erc4626V1Calls, writer.uint32(258).fork()).ldelim();
    }
    if (message.stakingV1Calls !== undefined) {
      StakingAdaptorV1Calls.encode(message.stakingV1Calls, writer.uint32(266).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.adaptor = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.aaveATokenV1Calls = AaveATokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.aaveDebtTokenV1Calls = AaveDebtTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.compoundCTokenV2Calls = CompoundCTokenAdaptorV2Calls.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.aaveATokenV2Calls = AaveATokenAdaptorV2Calls.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.aaveDebtTokenV2Calls = AaveDebtTokenAdaptorV2Calls.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.aaveV3ATokenV1Calls = AaveV3ATokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.oneInchV1Calls = OneInchAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.feesAndReservesV1Calls = FeesAndReservesAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.zeroXV1Calls = ZeroXAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.swapWithUniswapV1Calls = SwapWithUniswapAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.vestingSimpleV2Calls = VestingSimpleAdaptorV2Calls.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.cellarV1Calls = CellarAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.uniswapV3V2Calls = UniswapV3AdaptorV2Calls.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.aaveV2EnableAssetAsCollateralV1Calls = AaveV2EnableAssetAsCollateralAdaptorV1Calls.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.fTokenV1Calls = FTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.morphoAaveV2ATokenV1Calls = MorphoAaveV2ATokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.morphoAaveV2DebtTokenV1Calls = MorphoAaveV2DebtTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.morphoAaveV3ATokenCollateralV1Calls = MorphoAaveV3ATokenCollateralAdaptorV1Calls.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.morphoAaveV3ATokenP2pV1Calls = MorphoAaveV3ATokenP2PAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.morphoAaveV3DebtTokenV1Calls = MorphoAaveV3DebtTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.balancerPoolV1Calls = BalancerPoolAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.legacyCellarV1Calls = LegacyCellarAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.debtFTokenV1Calls = DebtFTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.collateralFTokenV1Calls = CollateralFTokenAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.convexCurveV1Calls = ConvexCurveAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.curveV1Calls = CurveAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.auraErc4626V1Calls = AuraERC4626AdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 29:
          if (tag !== 234) {
            break;
          }

          message.morphoBlueCollateralV1Calls = MorphoBlueCollateralAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.morphoBlueDebtV1Calls = MorphoBlueDebtAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.morphoBlueSupplyV1Calls = MorphoBlueSupplyAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.erc4626V1Calls = ERC4626AdaptorV1Calls.decode(reader, reader.uint32());
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.stakingV1Calls = StakingAdaptorV1Calls.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan {
    return {
      adaptor: isSet(object.adaptor) ? globalThis.String(object.adaptor) : "",
      aaveATokenV1Calls: isSet(object.aaveATokenV1Calls)
        ? AaveATokenAdaptorV1Calls.fromJSON(object.aaveATokenV1Calls)
        : undefined,
      aaveDebtTokenV1Calls: isSet(object.aaveDebtTokenV1Calls)
        ? AaveDebtTokenAdaptorV1Calls.fromJSON(object.aaveDebtTokenV1Calls)
        : undefined,
      compoundCTokenV2Calls: isSet(object.compoundCTokenV2Calls)
        ? CompoundCTokenAdaptorV2Calls.fromJSON(object.compoundCTokenV2Calls)
        : undefined,
      aaveATokenV2Calls: isSet(object.aaveATokenV2Calls)
        ? AaveATokenAdaptorV2Calls.fromJSON(object.aaveATokenV2Calls)
        : undefined,
      aaveDebtTokenV2Calls: isSet(object.aaveDebtTokenV2Calls)
        ? AaveDebtTokenAdaptorV2Calls.fromJSON(object.aaveDebtTokenV2Calls)
        : undefined,
      aaveV3ATokenV1Calls: isSet(object.aaveV3ATokenV1Calls)
        ? AaveV3ATokenAdaptorV1Calls.fromJSON(object.aaveV3ATokenV1Calls)
        : undefined,
      oneInchV1Calls: isSet(object.oneInchV1Calls) ? OneInchAdaptorV1Calls.fromJSON(object.oneInchV1Calls) : undefined,
      feesAndReservesV1Calls: isSet(object.feesAndReservesV1Calls)
        ? FeesAndReservesAdaptorV1Calls.fromJSON(object.feesAndReservesV1Calls)
        : undefined,
      zeroXV1Calls: isSet(object.zeroXV1Calls) ? ZeroXAdaptorV1Calls.fromJSON(object.zeroXV1Calls) : undefined,
      swapWithUniswapV1Calls: isSet(object.swapWithUniswapV1Calls)
        ? SwapWithUniswapAdaptorV1Calls.fromJSON(object.swapWithUniswapV1Calls)
        : undefined,
      vestingSimpleV2Calls: isSet(object.vestingSimpleV2Calls)
        ? VestingSimpleAdaptorV2Calls.fromJSON(object.vestingSimpleV2Calls)
        : undefined,
      cellarV1Calls: isSet(object.cellarV1Calls) ? CellarAdaptorV1Calls.fromJSON(object.cellarV1Calls) : undefined,
      uniswapV3V2Calls: isSet(object.uniswapV3V2Calls)
        ? UniswapV3AdaptorV2Calls.fromJSON(object.uniswapV3V2Calls)
        : undefined,
      aaveV2EnableAssetAsCollateralV1Calls: isSet(object.aaveV2EnableAssetAsCollateralV1Calls)
        ? AaveV2EnableAssetAsCollateralAdaptorV1Calls.fromJSON(object.aaveV2EnableAssetAsCollateralV1Calls)
        : undefined,
      fTokenV1Calls: isSet(object.fTokenV1Calls) ? FTokenAdaptorV1Calls.fromJSON(object.fTokenV1Calls) : undefined,
      morphoAaveV2ATokenV1Calls: isSet(object.morphoAaveV2ATokenV1Calls)
        ? MorphoAaveV2ATokenAdaptorV1Calls.fromJSON(object.morphoAaveV2ATokenV1Calls)
        : undefined,
      morphoAaveV2DebtTokenV1Calls: isSet(object.morphoAaveV2DebtTokenV1Calls)
        ? MorphoAaveV2DebtTokenAdaptorV1Calls.fromJSON(object.morphoAaveV2DebtTokenV1Calls)
        : undefined,
      morphoAaveV3ATokenCollateralV1Calls: isSet(object.morphoAaveV3ATokenCollateralV1Calls)
        ? MorphoAaveV3ATokenCollateralAdaptorV1Calls.fromJSON(object.morphoAaveV3ATokenCollateralV1Calls)
        : undefined,
      morphoAaveV3ATokenP2pV1Calls: isSet(object.morphoAaveV3ATokenP2pV1Calls)
        ? MorphoAaveV3ATokenP2PAdaptorV1Calls.fromJSON(object.morphoAaveV3ATokenP2pV1Calls)
        : undefined,
      morphoAaveV3DebtTokenV1Calls: isSet(object.morphoAaveV3DebtTokenV1Calls)
        ? MorphoAaveV3DebtTokenAdaptorV1Calls.fromJSON(object.morphoAaveV3DebtTokenV1Calls)
        : undefined,
      balancerPoolV1Calls: isSet(object.balancerPoolV1Calls)
        ? BalancerPoolAdaptorV1Calls.fromJSON(object.balancerPoolV1Calls)
        : undefined,
      legacyCellarV1Calls: isSet(object.legacyCellarV1Calls)
        ? LegacyCellarAdaptorV1Calls.fromJSON(object.legacyCellarV1Calls)
        : undefined,
      debtFTokenV1Calls: isSet(object.debtFTokenV1Calls)
        ? DebtFTokenAdaptorV1Calls.fromJSON(object.debtFTokenV1Calls)
        : undefined,
      collateralFTokenV1Calls: isSet(object.collateralFTokenV1Calls)
        ? CollateralFTokenAdaptorV1Calls.fromJSON(object.collateralFTokenV1Calls)
        : undefined,
      convexCurveV1Calls: isSet(object.convexCurveV1Calls)
        ? ConvexCurveAdaptorV1Calls.fromJSON(object.convexCurveV1Calls)
        : undefined,
      curveV1Calls: isSet(object.curveV1Calls) ? CurveAdaptorV1Calls.fromJSON(object.curveV1Calls) : undefined,
      auraErc4626V1Calls: isSet(object.auraErc4626V1Calls)
        ? AuraERC4626AdaptorV1Calls.fromJSON(object.auraErc4626V1Calls)
        : undefined,
      morphoBlueCollateralV1Calls: isSet(object.morphoBlueCollateralV1Calls)
        ? MorphoBlueCollateralAdaptorV1Calls.fromJSON(object.morphoBlueCollateralV1Calls)
        : undefined,
      morphoBlueDebtV1Calls: isSet(object.morphoBlueDebtV1Calls)
        ? MorphoBlueDebtAdaptorV1Calls.fromJSON(object.morphoBlueDebtV1Calls)
        : undefined,
      morphoBlueSupplyV1Calls: isSet(object.morphoBlueSupplyV1Calls)
        ? MorphoBlueSupplyAdaptorV1Calls.fromJSON(object.morphoBlueSupplyV1Calls)
        : undefined,
      erc4626V1Calls: isSet(object.erc4626V1Calls) ? ERC4626AdaptorV1Calls.fromJSON(object.erc4626V1Calls) : undefined,
      stakingV1Calls: isSet(object.stakingV1Calls) ? StakingAdaptorV1Calls.fromJSON(object.stakingV1Calls) : undefined,
    };
  },

  toJSON(message: AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan): unknown {
    const obj: any = {};
    if (message.adaptor !== "") {
      obj.adaptor = message.adaptor;
    }
    if (message.aaveATokenV1Calls !== undefined) {
      obj.aaveATokenV1Calls = AaveATokenAdaptorV1Calls.toJSON(message.aaveATokenV1Calls);
    }
    if (message.aaveDebtTokenV1Calls !== undefined) {
      obj.aaveDebtTokenV1Calls = AaveDebtTokenAdaptorV1Calls.toJSON(message.aaveDebtTokenV1Calls);
    }
    if (message.compoundCTokenV2Calls !== undefined) {
      obj.compoundCTokenV2Calls = CompoundCTokenAdaptorV2Calls.toJSON(message.compoundCTokenV2Calls);
    }
    if (message.aaveATokenV2Calls !== undefined) {
      obj.aaveATokenV2Calls = AaveATokenAdaptorV2Calls.toJSON(message.aaveATokenV2Calls);
    }
    if (message.aaveDebtTokenV2Calls !== undefined) {
      obj.aaveDebtTokenV2Calls = AaveDebtTokenAdaptorV2Calls.toJSON(message.aaveDebtTokenV2Calls);
    }
    if (message.aaveV3ATokenV1Calls !== undefined) {
      obj.aaveV3ATokenV1Calls = AaveV3ATokenAdaptorV1Calls.toJSON(message.aaveV3ATokenV1Calls);
    }
    if (message.oneInchV1Calls !== undefined) {
      obj.oneInchV1Calls = OneInchAdaptorV1Calls.toJSON(message.oneInchV1Calls);
    }
    if (message.feesAndReservesV1Calls !== undefined) {
      obj.feesAndReservesV1Calls = FeesAndReservesAdaptorV1Calls.toJSON(message.feesAndReservesV1Calls);
    }
    if (message.zeroXV1Calls !== undefined) {
      obj.zeroXV1Calls = ZeroXAdaptorV1Calls.toJSON(message.zeroXV1Calls);
    }
    if (message.swapWithUniswapV1Calls !== undefined) {
      obj.swapWithUniswapV1Calls = SwapWithUniswapAdaptorV1Calls.toJSON(message.swapWithUniswapV1Calls);
    }
    if (message.vestingSimpleV2Calls !== undefined) {
      obj.vestingSimpleV2Calls = VestingSimpleAdaptorV2Calls.toJSON(message.vestingSimpleV2Calls);
    }
    if (message.cellarV1Calls !== undefined) {
      obj.cellarV1Calls = CellarAdaptorV1Calls.toJSON(message.cellarV1Calls);
    }
    if (message.uniswapV3V2Calls !== undefined) {
      obj.uniswapV3V2Calls = UniswapV3AdaptorV2Calls.toJSON(message.uniswapV3V2Calls);
    }
    if (message.aaveV2EnableAssetAsCollateralV1Calls !== undefined) {
      obj.aaveV2EnableAssetAsCollateralV1Calls = AaveV2EnableAssetAsCollateralAdaptorV1Calls.toJSON(
        message.aaveV2EnableAssetAsCollateralV1Calls,
      );
    }
    if (message.fTokenV1Calls !== undefined) {
      obj.fTokenV1Calls = FTokenAdaptorV1Calls.toJSON(message.fTokenV1Calls);
    }
    if (message.morphoAaveV2ATokenV1Calls !== undefined) {
      obj.morphoAaveV2ATokenV1Calls = MorphoAaveV2ATokenAdaptorV1Calls.toJSON(message.morphoAaveV2ATokenV1Calls);
    }
    if (message.morphoAaveV2DebtTokenV1Calls !== undefined) {
      obj.morphoAaveV2DebtTokenV1Calls = MorphoAaveV2DebtTokenAdaptorV1Calls.toJSON(
        message.morphoAaveV2DebtTokenV1Calls,
      );
    }
    if (message.morphoAaveV3ATokenCollateralV1Calls !== undefined) {
      obj.morphoAaveV3ATokenCollateralV1Calls = MorphoAaveV3ATokenCollateralAdaptorV1Calls.toJSON(
        message.morphoAaveV3ATokenCollateralV1Calls,
      );
    }
    if (message.morphoAaveV3ATokenP2pV1Calls !== undefined) {
      obj.morphoAaveV3ATokenP2pV1Calls = MorphoAaveV3ATokenP2PAdaptorV1Calls.toJSON(
        message.morphoAaveV3ATokenP2pV1Calls,
      );
    }
    if (message.morphoAaveV3DebtTokenV1Calls !== undefined) {
      obj.morphoAaveV3DebtTokenV1Calls = MorphoAaveV3DebtTokenAdaptorV1Calls.toJSON(
        message.morphoAaveV3DebtTokenV1Calls,
      );
    }
    if (message.balancerPoolV1Calls !== undefined) {
      obj.balancerPoolV1Calls = BalancerPoolAdaptorV1Calls.toJSON(message.balancerPoolV1Calls);
    }
    if (message.legacyCellarV1Calls !== undefined) {
      obj.legacyCellarV1Calls = LegacyCellarAdaptorV1Calls.toJSON(message.legacyCellarV1Calls);
    }
    if (message.debtFTokenV1Calls !== undefined) {
      obj.debtFTokenV1Calls = DebtFTokenAdaptorV1Calls.toJSON(message.debtFTokenV1Calls);
    }
    if (message.collateralFTokenV1Calls !== undefined) {
      obj.collateralFTokenV1Calls = CollateralFTokenAdaptorV1Calls.toJSON(message.collateralFTokenV1Calls);
    }
    if (message.convexCurveV1Calls !== undefined) {
      obj.convexCurveV1Calls = ConvexCurveAdaptorV1Calls.toJSON(message.convexCurveV1Calls);
    }
    if (message.curveV1Calls !== undefined) {
      obj.curveV1Calls = CurveAdaptorV1Calls.toJSON(message.curveV1Calls);
    }
    if (message.auraErc4626V1Calls !== undefined) {
      obj.auraErc4626V1Calls = AuraERC4626AdaptorV1Calls.toJSON(message.auraErc4626V1Calls);
    }
    if (message.morphoBlueCollateralV1Calls !== undefined) {
      obj.morphoBlueCollateralV1Calls = MorphoBlueCollateralAdaptorV1Calls.toJSON(message.morphoBlueCollateralV1Calls);
    }
    if (message.morphoBlueDebtV1Calls !== undefined) {
      obj.morphoBlueDebtV1Calls = MorphoBlueDebtAdaptorV1Calls.toJSON(message.morphoBlueDebtV1Calls);
    }
    if (message.morphoBlueSupplyV1Calls !== undefined) {
      obj.morphoBlueSupplyV1Calls = MorphoBlueSupplyAdaptorV1Calls.toJSON(message.morphoBlueSupplyV1Calls);
    }
    if (message.erc4626V1Calls !== undefined) {
      obj.erc4626V1Calls = ERC4626AdaptorV1Calls.toJSON(message.erc4626V1Calls);
    }
    if (message.stakingV1Calls !== undefined) {
      obj.stakingV1Calls = StakingAdaptorV1Calls.toJSON(message.stakingV1Calls);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan>, I>>(
    base?: I,
  ): AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan {
    return AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan>, I>>(
    object: I,
  ): AaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan {
    const message = createBaseAaveV3DebtTokenAdaptorV1FlashLoan_AdaptorCallForAaveV3FlashLoan();
    message.adaptor = object.adaptor ?? "";
    message.aaveATokenV1Calls = (object.aaveATokenV1Calls !== undefined && object.aaveATokenV1Calls !== null)
      ? AaveATokenAdaptorV1Calls.fromPartial(object.aaveATokenV1Calls)
      : undefined;
    message.aaveDebtTokenV1Calls = (object.aaveDebtTokenV1Calls !== undefined && object.aaveDebtTokenV1Calls !== null)
      ? AaveDebtTokenAdaptorV1Calls.fromPartial(object.aaveDebtTokenV1Calls)
      : undefined;
    message.compoundCTokenV2Calls =
      (object.compoundCTokenV2Calls !== undefined && object.compoundCTokenV2Calls !== null)
        ? CompoundCTokenAdaptorV2Calls.fromPartial(object.compoundCTokenV2Calls)
        : undefined;
    message.aaveATokenV2Calls = (object.aaveATokenV2Calls !== undefined && object.aaveATokenV2Calls !== null)
      ? AaveATokenAdaptorV2Calls.fromPartial(object.aaveATokenV2Calls)
      : undefined;
    message.aaveDebtTokenV2Calls = (object.aaveDebtTokenV2Calls !== undefined && object.aaveDebtTokenV2Calls !== null)
      ? AaveDebtTokenAdaptorV2Calls.fromPartial(object.aaveDebtTokenV2Calls)
      : undefined;
    message.aaveV3ATokenV1Calls = (object.aaveV3ATokenV1Calls !== undefined && object.aaveV3ATokenV1Calls !== null)
      ? AaveV3ATokenAdaptorV1Calls.fromPartial(object.aaveV3ATokenV1Calls)
      : undefined;
    message.oneInchV1Calls = (object.oneInchV1Calls !== undefined && object.oneInchV1Calls !== null)
      ? OneInchAdaptorV1Calls.fromPartial(object.oneInchV1Calls)
      : undefined;
    message.feesAndReservesV1Calls =
      (object.feesAndReservesV1Calls !== undefined && object.feesAndReservesV1Calls !== null)
        ? FeesAndReservesAdaptorV1Calls.fromPartial(object.feesAndReservesV1Calls)
        : undefined;
    message.zeroXV1Calls = (object.zeroXV1Calls !== undefined && object.zeroXV1Calls !== null)
      ? ZeroXAdaptorV1Calls.fromPartial(object.zeroXV1Calls)
      : undefined;
    message.swapWithUniswapV1Calls =
      (object.swapWithUniswapV1Calls !== undefined && object.swapWithUniswapV1Calls !== null)
        ? SwapWithUniswapAdaptorV1Calls.fromPartial(object.swapWithUniswapV1Calls)
        : undefined;
    message.vestingSimpleV2Calls = (object.vestingSimpleV2Calls !== undefined && object.vestingSimpleV2Calls !== null)
      ? VestingSimpleAdaptorV2Calls.fromPartial(object.vestingSimpleV2Calls)
      : undefined;
    message.cellarV1Calls = (object.cellarV1Calls !== undefined && object.cellarV1Calls !== null)
      ? CellarAdaptorV1Calls.fromPartial(object.cellarV1Calls)
      : undefined;
    message.uniswapV3V2Calls = (object.uniswapV3V2Calls !== undefined && object.uniswapV3V2Calls !== null)
      ? UniswapV3AdaptorV2Calls.fromPartial(object.uniswapV3V2Calls)
      : undefined;
    message.aaveV2EnableAssetAsCollateralV1Calls =
      (object.aaveV2EnableAssetAsCollateralV1Calls !== undefined &&
          object.aaveV2EnableAssetAsCollateralV1Calls !== null)
        ? AaveV2EnableAssetAsCollateralAdaptorV1Calls.fromPartial(object.aaveV2EnableAssetAsCollateralV1Calls)
        : undefined;
    message.fTokenV1Calls = (object.fTokenV1Calls !== undefined && object.fTokenV1Calls !== null)
      ? FTokenAdaptorV1Calls.fromPartial(object.fTokenV1Calls)
      : undefined;
    message.morphoAaveV2ATokenV1Calls =
      (object.morphoAaveV2ATokenV1Calls !== undefined && object.morphoAaveV2ATokenV1Calls !== null)
        ? MorphoAaveV2ATokenAdaptorV1Calls.fromPartial(object.morphoAaveV2ATokenV1Calls)
        : undefined;
    message.morphoAaveV2DebtTokenV1Calls =
      (object.morphoAaveV2DebtTokenV1Calls !== undefined && object.morphoAaveV2DebtTokenV1Calls !== null)
        ? MorphoAaveV2DebtTokenAdaptorV1Calls.fromPartial(object.morphoAaveV2DebtTokenV1Calls)
        : undefined;
    message.morphoAaveV3ATokenCollateralV1Calls =
      (object.morphoAaveV3ATokenCollateralV1Calls !== undefined && object.morphoAaveV3ATokenCollateralV1Calls !== null)
        ? MorphoAaveV3ATokenCollateralAdaptorV1Calls.fromPartial(object.morphoAaveV3ATokenCollateralV1Calls)
        : undefined;
    message.morphoAaveV3ATokenP2pV1Calls =
      (object.morphoAaveV3ATokenP2pV1Calls !== undefined && object.morphoAaveV3ATokenP2pV1Calls !== null)
        ? MorphoAaveV3ATokenP2PAdaptorV1Calls.fromPartial(object.morphoAaveV3ATokenP2pV1Calls)
        : undefined;
    message.morphoAaveV3DebtTokenV1Calls =
      (object.morphoAaveV3DebtTokenV1Calls !== undefined && object.morphoAaveV3DebtTokenV1Calls !== null)
        ? MorphoAaveV3DebtTokenAdaptorV1Calls.fromPartial(object.morphoAaveV3DebtTokenV1Calls)
        : undefined;
    message.balancerPoolV1Calls = (object.balancerPoolV1Calls !== undefined && object.balancerPoolV1Calls !== null)
      ? BalancerPoolAdaptorV1Calls.fromPartial(object.balancerPoolV1Calls)
      : undefined;
    message.legacyCellarV1Calls = (object.legacyCellarV1Calls !== undefined && object.legacyCellarV1Calls !== null)
      ? LegacyCellarAdaptorV1Calls.fromPartial(object.legacyCellarV1Calls)
      : undefined;
    message.debtFTokenV1Calls = (object.debtFTokenV1Calls !== undefined && object.debtFTokenV1Calls !== null)
      ? DebtFTokenAdaptorV1Calls.fromPartial(object.debtFTokenV1Calls)
      : undefined;
    message.collateralFTokenV1Calls =
      (object.collateralFTokenV1Calls !== undefined && object.collateralFTokenV1Calls !== null)
        ? CollateralFTokenAdaptorV1Calls.fromPartial(object.collateralFTokenV1Calls)
        : undefined;
    message.convexCurveV1Calls = (object.convexCurveV1Calls !== undefined && object.convexCurveV1Calls !== null)
      ? ConvexCurveAdaptorV1Calls.fromPartial(object.convexCurveV1Calls)
      : undefined;
    message.curveV1Calls = (object.curveV1Calls !== undefined && object.curveV1Calls !== null)
      ? CurveAdaptorV1Calls.fromPartial(object.curveV1Calls)
      : undefined;
    message.auraErc4626V1Calls = (object.auraErc4626V1Calls !== undefined && object.auraErc4626V1Calls !== null)
      ? AuraERC4626AdaptorV1Calls.fromPartial(object.auraErc4626V1Calls)
      : undefined;
    message.morphoBlueCollateralV1Calls =
      (object.morphoBlueCollateralV1Calls !== undefined && object.morphoBlueCollateralV1Calls !== null)
        ? MorphoBlueCollateralAdaptorV1Calls.fromPartial(object.morphoBlueCollateralV1Calls)
        : undefined;
    message.morphoBlueDebtV1Calls =
      (object.morphoBlueDebtV1Calls !== undefined && object.morphoBlueDebtV1Calls !== null)
        ? MorphoBlueDebtAdaptorV1Calls.fromPartial(object.morphoBlueDebtV1Calls)
        : undefined;
    message.morphoBlueSupplyV1Calls =
      (object.morphoBlueSupplyV1Calls !== undefined && object.morphoBlueSupplyV1Calls !== null)
        ? MorphoBlueSupplyAdaptorV1Calls.fromPartial(object.morphoBlueSupplyV1Calls)
        : undefined;
    message.erc4626V1Calls = (object.erc4626V1Calls !== undefined && object.erc4626V1Calls !== null)
      ? ERC4626AdaptorV1Calls.fromPartial(object.erc4626V1Calls)
      : undefined;
    message.stakingV1Calls = (object.stakingV1Calls !== undefined && object.stakingV1Calls !== null)
      ? StakingAdaptorV1Calls.fromPartial(object.stakingV1Calls)
      : undefined;
    return message;
  },
};

function createBaseAaveV3DebtTokenAdaptorV1FlashLoanCalls(): AaveV3DebtTokenAdaptorV1FlashLoanCalls {
  return { calls: [] };
}

export const AaveV3DebtTokenAdaptorV1FlashLoanCalls = {
  encode(message: AaveV3DebtTokenAdaptorV1FlashLoanCalls, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      AaveV3DebtTokenAdaptorV1FlashLoan.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AaveV3DebtTokenAdaptorV1FlashLoanCalls {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAaveV3DebtTokenAdaptorV1FlashLoanCalls();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.calls.push(AaveV3DebtTokenAdaptorV1FlashLoan.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AaveV3DebtTokenAdaptorV1FlashLoanCalls {
    return {
      calls: globalThis.Array.isArray(object?.calls)
        ? object.calls.map((e: any) => AaveV3DebtTokenAdaptorV1FlashLoan.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AaveV3DebtTokenAdaptorV1FlashLoanCalls): unknown {
    const obj: any = {};
    if (message.calls?.length) {
      obj.calls = message.calls.map((e) => AaveV3DebtTokenAdaptorV1FlashLoan.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1FlashLoanCalls>, I>>(
    base?: I,
  ): AaveV3DebtTokenAdaptorV1FlashLoanCalls {
    return AaveV3DebtTokenAdaptorV1FlashLoanCalls.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AaveV3DebtTokenAdaptorV1FlashLoanCalls>, I>>(
    object: I,
  ): AaveV3DebtTokenAdaptorV1FlashLoanCalls {
    const message = createBaseAaveV3DebtTokenAdaptorV1FlashLoanCalls();
    message.calls = object.calls?.map((e) => AaveV3DebtTokenAdaptorV1FlashLoan.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
