import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/angeloorssatto.png"
        alt="photo"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Username</span>
        <span className="text-sm text-zinc-500 truncate">
          username@email.comusername@email.comusername@email.comusername@email.com
        </span>
      </div>
      <button type="button" className="ml-auto p-2 rounded-md hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
}
