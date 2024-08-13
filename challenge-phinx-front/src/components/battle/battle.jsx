import { useBattle } from "../../hooks/hookBattle";


export function BattleComponent({pokemon1, pokemon2}) {
    const [result, loading, error, startBattle] = useBattle();
    const handleBattle = () => {
        startBattle(pokemon1, pokemon2)
    }

    return (
        <div>
        <Button
            variant="contained"
            color="success"
            onClick={handleBattle}
            disabled={loading}
        >
            Start Battle
        </Button>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error.message}</Typography>}
        {result && (
            <Typography>
                Winner: {result.winner} - Loser: {result.loser}
            </Typography>
        )}
    </div>
    )
}